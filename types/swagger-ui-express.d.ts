declare module 'swagger-ui-express' {
    import { RequestHandler } from 'express';

    interface SwaggerUiOptions {
        customCss?: string;
        customJs?: string;
        customfavIcon?: string;
        customSiteTitle?: string;
    }

    export function setup(
        swaggerDoc: Record<string, any>,
        options?: SwaggerUiOptions
    ): RequestHandler;

    export function serve(req: any, res: any, next: any): void;
}
