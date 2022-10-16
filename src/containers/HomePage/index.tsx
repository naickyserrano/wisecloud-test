import { Outlet, useNavigate, useParams } from "react-router-dom";
import { HomeContainer, SelectContainer, Select } from "./styles";
import NoGamesContainer from "../../components/NoGamesContainer/NoGamesContainer";
import { options } from "../../constants/constants";

/**
 *
 * @returns {JSX.Element}
 */

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();
  const checkIfHasGameId = params.hasOwnProperty("gameId");

  const handleSelectGameId = (e: { target: { value: string } }) => {
    if (!e.target.value) return navigate("/");

    navigate(`games/${e.target.value}`, { replace: true });
  };

  return (
    <HomeContainer>
      <SelectContainer>
        <Select
          onChange={handleSelectGameId}
          value={params?.gameId}
          name="games"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
      </SelectContainer>
      <main>{checkIfHasGameId ? <Outlet /> : <NoGamesContainer />}</main>
    </HomeContainer>
  );
};

export default HomePage;
