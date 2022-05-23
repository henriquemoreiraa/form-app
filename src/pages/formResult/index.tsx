import * as C from "./styles"
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from "react"
import { SelectOption } from '../../components/SelectOption'

export const FormStep4 = () => {
    const history = useNavigate()

    useEffect(() => {
        if (state.name === '') {
            history('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
        
    }, [])
    
    const { state, dispatch } = useForm()

    return (
        <Theme>
            <C.Container>
                <p>Results</p>
                <h1>Research results </h1>
                
                <hr />

                <p>Your name: <span className="green">{state.name}</span></p>

                <span>
                    Your nickname: <span className="green">{state.nickName}</span> | Game: <span className="green">{state.game}</span>
                </span>

                <h3>Your gaming experience:</h3>

                { state.level === 0 && <SelectOption 
                    title="I'm a beginner"
                    description="I've been playing games less than 5 years"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => undefined}
                />}
                { state.level === 1 && <SelectOption 
                    title="I am an experienced"
                    description="I've been playing games less than 10 years"
                    icon="🎓"
                    selected={state.level === 1}
                    onClick={() => undefined}
                />}
                { state.level === 2 && <SelectOption 
                    title="I am an expert"
                    description="I've been playing games less than 30 years"
                    icon="😎"
                    selected={state.level === 2}
                    onClick={() => undefined}
                />}
                { state.level === 3 && <SelectOption 
                    title="I'm an elder"
                    description="I've been playing games more than 30 years"
                    icon="🧙‍♂️"
                    selected={state.level === 3}
                    onClick={() => undefined}
                />}
            </C.Container>
        </Theme>
        
    )
}