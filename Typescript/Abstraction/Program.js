"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailNotification_1 = require("./EmailNotification");
var NotificationService_1 = require("./NotificationService");
var service = new NotificationService_1.NotificationService(new EmailNotification_1.EmailNotification());
service.notify("Your exam result is published");
