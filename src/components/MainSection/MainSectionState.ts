import { TabContainer } from "./TabContainer";
import { Articles } from "../../interfaces/Article";

export interface MainSectionState {
	tabIndex: number,
	tabs: DemoTab[],
	allArticles: Articles
	filteredArticles: Articles,
	filtrationTags: string[]
}

export interface DemoTab {
	title: string,
	content: TabContainer
}