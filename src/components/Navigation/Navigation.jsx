import { NavigationLink } from '../Navigation/navigation.styled';


export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavigationLink to="/">Home</NavigationLink></li>
                <li><NavigationLink to="add">Add</NavigationLink></li>
            </ul>
        </nav>
    )
}