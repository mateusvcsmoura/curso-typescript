type Settings = Record<string, string | number | boolean>;

const settings: Settings = {
    type: "anything",
    module: 2,
    screen: true
}

//

interface Route {
    path: string;
    children?: Routes
}

type Routes = Record<string, Route>;

const routes: Routes = {
    home: {
        path: "/src",
        children: {
            auth: {
                path: "/auth"
            }
        }
    }
};

//

type Feature = "compile" | "autoSave" | "autoUpdate";

type Features = Record<Feature, boolean>;



