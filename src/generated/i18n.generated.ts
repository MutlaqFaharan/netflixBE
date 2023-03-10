/* DO NOT EDIT, file generated by nestjs-i18n */

import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "auth": {
        "errors": {
            "unauthorized": string;
            "unauthenticated": string;
            "wrongEmailOrPassword": string;
        };
        "success": {
            "login": string;
            "register": string;
        };
        "validation": {
            "isNotEmpty": string;
            "min": string;
            "isString": string;
            "isInt": string;
            "max": string;
            "email": string;
            "minLength": string;
            "maxLength": string;
            "uniqueEmail": string;
            "passwordContains": {
                "uppercase": string;
                "lowercase": string;
                "number": string;
                "specialCharacter": string;
            };
            "date": string;
        };
    };
    "movie": {
        "errors": {
            "watchList": string;
            "updateDelete": string;
        };
        "success": {
            "create": string;
            "review": string;
            "addToWatchList": string;
            "delete": string;
        };
    };
    "shared": {
        "errors": {
            "error": string;
            "user": string;
            "movie": string;
        };
        "success": {
            "success": string;
        };
        "dtos": {
            "property": {
                "fullName": string;
                "age": string;
                "email": string;
                "password": string;
            };
            "constraint": {
                "uppercase": string;
                "lowercase": string;
                "number": string;
                "specialCharacter": string;
            };
        };
        "entities": {
            "movie": string;
            "user": string;
        };
    };
};
export type I18nPath = Path<I18nTranslations>;
