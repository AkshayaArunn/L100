package com.ck;

import java.io.File;
import java.net.URL;
import java.util.*;

public class AnalyzerRunner {

    public static void main(String[] args) throws Exception {
        // Target package to analyze
        String packageName = "com.ck.test";

        System.out.println("Scanning package: " + packageName);

        List<Class<?>> classes = getClasses(packageName);
        Set<Class<?>> classSet = new HashSet<>(classes); // fast lookup for NOC

        System.out.println("Found " + classes.size() + " classes.");

        for (Class<?> clazz : classes) {
            CKAnalyzer.analyzeClass(clazz, classSet);
        }
    }

    /**
     * Scans all classes accessible from the context class loader which belong to
     * the given package and subpackages.
     */
    private static List<Class<?>> getClasses(String packageName) throws Exception {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        String path = packageName.replace('.', '/');
        Enumeration<URL> resources = classLoader.getResources(path);
        List<File> dirs = new ArrayList<>();
        while (resources.hasMoreElements()) {
            URL resource = resources.nextElement();
            dirs.add(new File(resource.toURI()));
        }
        ArrayList<Class<?>> classes = new ArrayList<>();
        for (File directory : dirs) {
            classes.addAll(findClasses(directory, packageName));
        }
        return classes;
    }

    private static List<Class<?>> findClasses(File directory, String packageName) throws ClassNotFoundException {
        List<Class<?>> classes = new ArrayList<>();
        if (!directory.exists()) {
            return classes;
        }
        File[] files = directory.listFiles();
        if (files == null)
            return classes;

        for (File file : files) {
            if (file.isDirectory()) {
                assert !file.getName().contains(".");
                classes.addAll(findClasses(file, packageName + "." + file.getName()));
            } else if (file.getName().endsWith(".class")) {
                String className = packageName + '.' + file.getName().substring(0, file.getName().length() - 6);
                classes.add(Class.forName(className));
            }
        }
        return classes;
    }
}
