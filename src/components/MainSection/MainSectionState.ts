import { TabContainer } from "./TabContainer";

export interface MainSectionState {
	tabIndex: number,
	tabs: DemoTab[]
}

export interface DemoTab {
	title: string,
	content: TabContainer
}