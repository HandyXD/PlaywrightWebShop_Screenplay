import { Task } from "@serenity-js/core";
import { Navigate } from "@serenity-js/web";

export const OpenWebsite = {
    at: (url: string) =>
        Task.where(
            `#actor opens the website`,
            Navigate.to(url),
        ),
};