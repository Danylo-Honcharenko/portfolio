import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Blog from "../pages/Blog.jsx";

const routers = [
    {name: "Home", path: "/", Component: Home},
    {name: "Who i am?", path: "/about", Component: About},
    {name: "Projects", path: "/projects", Component: Projects},
    {name: "Blog", path: "/blog", Component: Blog}
];

export {routers};