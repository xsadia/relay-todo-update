import { Container, NavButton, HeaderTitle, NavButtonsContainer, NavUserGreeting } from "./styles";
import { AiOutlineNodeIndex } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
/* import { useAuth } from "../../auth/useAuth"; */
import { useHistory } from "react-router-dom";

type HeaderProps = {
    handleOpenModal: () => void;
};

export const Header = ({ handleOpenModal }: HeaderProps) => {
    const user = JSON.parse(localStorage.getItem('@relayTodo:user'));
    const history = useHistory();
    return (
        <Container>
            <HeaderTitle>Relay Todo  <AiOutlineNodeIndex /></HeaderTitle>

            <NavButtonsContainer>
                <NavUserGreeting>Welcome {user.username} 👋 </NavUserGreeting>
                <NavButton onClick={() => handleOpenModal()}>Create Todo <IoIosAddCircleOutline /></NavButton>
                <NavButton onClick={() => {
                    /* signOut(); */
                    localStorage.removeItem('@relayTodo:token');
                    localStorage.removeItem('@relayTodo:user');
                    history.push('/');
                }}> Logout <FiLogOut /></NavButton>
            </NavButtonsContainer>
        </Container>
    );
};