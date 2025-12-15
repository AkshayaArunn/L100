package com.ck;

import java.lang.reflect.*;
import java.util.*;

public class CKAnalyzer {

    // Helper to print results clearly
    public static void analyzeClass(Class<?> clazz, Set<Class<?>> allSystemClasses) {
        System.out.println("--------------------------------------------------");
        System.out.println("Analyzing Class: " + clazz.getName());
        System.out.println("--------------------------------------------------");

        try {
            System.out.println("1. WMC:  " + calculateWMC(clazz));
            System.out.println("2. DIT:  " + calculateDIT(clazz));
            System.out.println("3. NOC:  " + calculateNOC(clazz, allSystemClasses));
            System.out.println("4. CBO:  " + calculateCBO(clazz));
            System.out.println("5. RFC:  " + calculateRFC(clazz));
            System.out.println("6. LCOM: " + calculateLCOM(clazz));
        } catch (Exception e) {
            System.err.println("Error analyzing class: " + e.getMessage());
            e.printStackTrace();
        }
        System.out.println();
    }

    // 1. WMC: Weighted Methods per Class
    public static int calculateWMC(Class<?> clazz) {
        // Count all declared methods (ignoring constructors for standard WMC, but includes private)
        Method[] methods = clazz.getDeclaredMethods();
        Constructor<?>[] constructors = clazz.getDeclaredConstructors();
        return methods.length + constructors.length;
    }

    // 2. DIT: Depth of Inheritance Tree
    public static int calculateDIT(Class<?> clazz) {
        int depth = 0;
        Class<?> current = clazz;
        while (current != null && current != Object.class) {
            depth++;
            current = current.getSuperclass();
        }
        return depth;
    }

    // 3. NOC: Number of Children
    public static int calculateNOC(Class<?> targetClazz, Set<Class<?>> allSystemClasses) {
        int count = 0;
        for (Class<?> c : allSystemClasses) {
            if (c.getSuperclass() != null && c.getSuperclass().equals(targetClazz)) {
                count++;
            }
        }
        return count;
    }

    // 4. CBO: Coupling Between Object classes
    public static int calculateCBO(Class<?> clazz) {
        Set<String> coupledClasses = new HashSet<>();
        
        // Fields
        for (Field field : clazz.getDeclaredFields()) {
            addIfCoupled(coupledClasses, field.getType(), clazz);
        }
        
        // Methods (Return type + Parameters)
        for (Method method : clazz.getDeclaredMethods()) {
            addIfCoupled(coupledClasses, method.getReturnType(), clazz);
            for (Class<?> param : method.getParameterTypes()) {
                addIfCoupled(coupledClasses, param, clazz);
            }
        }

        return coupledClasses.size();
    }

    private static void addIfCoupled(Set<String> set, Class<?> type, Class<?> sourceClass) {
        if (type.isPrimitive()) return;
        if (type.getName().startsWith("java.")) return; // Ignore standard libs
        if (type.getName().equals(sourceClass.getName())) return; // Ignore self-coupling
        
        if (type.isArray()) {
            addIfCoupled(set, type.getComponentType(), sourceClass);
            return;
        }

        set.add(type.getName());
    }

    // 5. RFC: Response For a Class (Approximation)
    // RFC = WMC + (Unique external types in method signatures)
    // "If I call a method, what potential external responses can trigger?"
    public static int calculateRFC(Class<?> clazz) {
        int wmc = calculateWMC(clazz);
        Set<String> signatureTypes = new HashSet<>();
        
        for (Method method : clazz.getDeclaredMethods()) {
            for (Class<?> param : method.getParameterTypes()) {
                if (!param.isPrimitive() && !param.getName().startsWith("java.")) {
                    signatureTypes.add(param.getName());
                }
            }
            Class<?> returnType = method.getReturnType();
            if (!returnType.isPrimitive() && !returnType.getName().startsWith("java.")) {
                signatureTypes.add(returnType.getName());
            }
        }
        
        return wmc + signatureTypes.size();
    }

    // 6. LCOM: Lack of Cohesion in Methods (Heuristic Approximation)
    // Heuristic: If method name contains field name (case-insensitive), assume usage.
    public static int calculateLCOM(Class<?> clazz) {
        Field[] fields = clazz.getDeclaredFields();
        Method[] methods = clazz.getDeclaredMethods();
        
        if (methods.length == 0 || fields.length == 0) return 0;
        
        int p = 0; // Pairs not sharing fields
        int q = 0; // Pairs sharing fields
        
        // Pre-calculate which fields each method "uses" (heuristically)
        Map<Method, Set<String>> methodFieldUsage = new HashMap<>();
        
        for (Method m : methods) {
            Set<String> usedFields = new HashSet<>();
            String mName = m.getName().toLowerCase();
            for (Field f : fields) {
                if (mName.contains(f.getName().toLowerCase())) {
                    usedFields.add(f.getName());
                }
            }
            methodFieldUsage.put(m, usedFields);
        }
        
        // Compare every pair of methods
        for (int i = 0; i < methods.length; i++) {
            for (int j = i + 1; j < methods.length; j++) {
                Set<String> fields1 = methodFieldUsage.get(methods[i]);
                Set<String> fields2 = methodFieldUsage.get(methods[j]);
                
                // Intersection check
                boolean sharesField = false;
                for (String f1 : fields1) {
                    if (fields2.contains(f1)) {
                        sharesField = true;
                        break;
                    }
                }
                
                if (sharesField) {
                    q++;
                } else {
                    p++;
                }
            }
        }
        
        return (p > q) ? (p - q) : 0;
    }
}
