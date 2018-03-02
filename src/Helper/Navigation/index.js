/**
 * @providesModule navigation
 */
import { StackNavigator } from "react-navigation";
import MainMenu from "Menu";
import SettingsScreen from "../../Settings";
import { GameScreen, SelectionScreen } from "Game";
import AddQuestionsScreen from "AddQuestions";

const navigation = StackNavigator({
  MainMenu: {
    screen: MainMenu
  },
  SettingsScreen: {
    screen: SettingsScreen
  },
  GameScreen: {
    screen: GameScreen
  },
  SelectionScreen: {
    screen: SelectionScreen
  },
  AddQuestions: {
    screen: AddQuestionsScreen
  }
});

const stackNavigationOptions = {
  headerMode: "none"
};
export default navigation;
