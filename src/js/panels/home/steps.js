import React from "react";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import { InlineMath } from "react-katex";
import {
    PanelHeader,
    PanelHeaderBack,
    SimpleCell,
    Counter,
    Header,
    Div,
    FormItem,
    FixedLayout,
    Card
} from "@vkontakte/vkui";
import {useSelector} from "react-redux";

function Steps({ router }) {
    const mainStorage = useSelector((state) => state.main);

    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <>
            <PanelHeader
                separator={mainStorage.isDesktop}
                before={<PanelHeaderBack onClick={() => router.toBack()} />}
            >
                Шаги решения
            </PanelHeader>
            <Card style={{margin: 5}}>
                <Header>Способы решения</Header>
                {mainStorage.steps.map((step, index) => {
                    return (
                        <SimpleCell
                            before={
                                <Counter
                                    style={{marginRight: 10, marginLeft: 10}}
                                    mode={activeStep === index ? "primary" : "secondary"}
                                >
                                    {index + 1}
                                </Counter>
                            }
                            onClick={() => setActiveStep(index)}
                            className={"steps__cell"}
                        >
                            {step.actionName}
                        </SimpleCell>
                    )
                })}
            </Card>

            {mainStorage.steps[activeStep].templateSteps.length !== 0 &&
                <>
                <Header>Шаги</Header>
                <Div style={{padding: 0}}>
                    {mainStorage.steps[activeStep].templateSteps[0].steps.map((step, index) => {
                        return (
                            <Card style={{margin: 5}}>
                                <FormItem
                                    top={`Шаг ${index + 1}`}
                                    bottom={step.step.replaceAll("$", "")}
                                >
                                    <InlineMath>
                                        {step.prevExpression.replaceAll("$", "")
                                        }</InlineMath>
                                </FormItem>
                            </Card>
                        )
                    })}
                </Div>
                </>
                }

            <FixedLayout vertical={"bottom"} className={"steps-result"}>
                <span style={{fontSize: 32, padding: 5}}><InlineMath>{mainStorage.steps[activeStep].solution.replaceAll("$", "")}</InlineMath></span>
            </FixedLayout>
        </>
    )
}

export default withRouter(Steps);