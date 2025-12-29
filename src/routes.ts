import {
    type RouteConfig,
    index,
    layout,
    route,
} from '@react-router/dev/routes';

export default [
    index('./layouts/rootLayout.tsx'),
    // layout('./layouts/authLayout.tsx', [
    //     route('auth/:authType', './components/authType/authType.tsx'),
    // ]),
    // layout('./layouts/profileLayout.tsx', [
    //     route('profile', './components/schedule/schedule.tsx'),
    //     route('profile/responses', './components/responses/responses.tsx'),
    // ]),
] satisfies RouteConfig;
