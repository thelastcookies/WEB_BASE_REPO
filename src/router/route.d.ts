import type {ActionMeta} from "@/router/types.ts";

declare module 'vue-router' {
    import type {RouteRecordRaw} from 'vue-router';

    interface RouteMeta extends ActionMeta {
    }
}
