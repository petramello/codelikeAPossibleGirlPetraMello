import {
    IconDiv,
    LContainer,
    LDateContainer,
    RContainer, RDateContainer,
    Skill,
    TimelineDiv,
    TimelineContent
} from "./styled";
import {GiSkills} from "react-icons/gi";

export default function Timeline( props) {

    return (
        <TimelineDiv >
            <LContainer>
                <TimelineContent>
                    <h4>{props.ltitle}</h4>
                    <p>{props.ldescription}</p>
                </TimelineContent>

                <LDateContainer>
                    {props.ldate}
                </LDateContainer>

                <IconDiv>
                    <GiSkills/>
                    <Skill>{props.lskill}</Skill>
                </IconDiv>
            </LContainer>

            <RContainer>
                <TimelineContent>
                    <h4>{props.rtitle}</h4>
                    <p>{props.rdescription}</p>
                </TimelineContent>

                <RDateContainer>
                    {props.rdate}
                </RDateContainer>

                <IconDiv>
                    <GiSkills/>
                    <Skill>{props.rskill}</Skill>
                </IconDiv>
            </RContainer>
        </TimelineDiv>
    )
}