import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from "shared/config/routeConfig/routeConfig.tsx";
import {BackgroundUIMock} from "shared/config";


const AppRouter: React.FC = () => {
    return (
        <Suspense fallback={<BackgroundUIMock/>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;