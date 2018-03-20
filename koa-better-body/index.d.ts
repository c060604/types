// Type definitions for koa-better-body 3.0
// Project: https://github.com/tunnckoCore/koa-better-body
// Definitions by: c060604
// TypeScript Version: 2.3

import Koa from "koa";
import { IncomingForm } from "formidable";

declare namespace BetterBody {
    interface BetterBodyOptions {
        /**
         * Default false, which means it will set fields on `this.request.fields`.
         * If you pass a string, for example `foo`, you will have fields on `this.request.foo`.
         */
        fields?: boolean | string;

        /**
         * Default false, which means it will set files on `this.request.files`.
         * If you pass a string, for example `bar`, you will have files on `this.request.bar`.
         */
        files?: boolean | string;

        /**
         * Default true. If you pass false it won't accept/parse multipart bodies.
         */
        multipart?: boolean;

        /**
         * Default '100kb'.
         */
        textLimit?: string;

        /**
         * Default '100kb'.
         */
        formLimit?: string;

        /**
         * Default '100kb'.
         */
        urlencodedLimit?: string;

        /**
         * Default '100kb'.
         */
        jsonLimit?: string;

        /**
         * Default '1mb'.
         */
        bufferLimit?: string;

        /**
         * Default true.
         * When set to true, JSON parser will only accept arrays and objects.
         */
        jsonStrict?: boolean;

        /**
         * Custom JSON request detect function.
         */
        detectJSON?: (ctx: Koa.Context) => boolean;

        /**
         * Default true.
         * Pass false if you want to allow parsing GET, DELETE and HEAD requests.
         */
        strict?: boolean;

        /**
         * Custom error handler, if throw an error, you can customize the response.
         */
        onerror?: (err: Error, ctx: Koa.Context) => void;

        /**
         * Allowing you to extend what your app can accept.
         */
        extendTypes?: { [key: string]: string[] };

        /**
         * An instance of `formidable.IncomingForm` to be able to handle formidable events.
         */
        IncomingForm?: IncomingForm;

        /**
         * To handle custom types of comtent-type.
         */
        handler?: (ctx: Koa.Context, opts: BetterBody.BetterBodyOptions) => Iterable<any>;

        /**
         * Querystring module to be used.
         * By default builtin `querystring`.
         */
        querystring?: { [key: string]: any };

        /**
         * Default is `&`.
         * Delimiter of key/value pairs, passed to querystring lib.
         */
        delimiter?: string;

        /**
         * Alias of opts.delimiter.
         */
        sep?: string;

        /**
         * Default false, pass true if you want to get body as buffer.
         */
        buffer?: boolean;
    }
}

declare function body(options: BetterBody.BetterBodyOptions): Koa.Middleware;

export = body;