import * as React from "react";
import {ReactViewMapping} from "fengwuxp-spring-react/src/route/ReactViewMapping";
import IndexView from "@pages/index";


interface DetailProps {

}

@ReactViewMapping({
    condition: "member.add",
    parent: IndexView
})
export default class DetailView extends React.Component<DetailProps> {

}