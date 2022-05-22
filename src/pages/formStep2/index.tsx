import * as C from "./styles"
import { useNavigate, Link } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from "react"
import { SelectOption } from '../../components/SelectOption'

export const FormStep2 = () => {
    useEffect(() => {
        if (state.name === '') {
            history('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        
    }, [])

    const history = useNavigate()
    const { state, dispatch } = useForm()
    
    const handleNextStep = () => {
        if (state.name !== '') {
            history('/step3')
        } else {
            alert('Type your nickname!')
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 2/3 </p>
                <h1>{state.name}, how many years do you play games? </h1>
                
                <hr />

                <SelectOption 
                    title="I'm a beginner"
                    description="I've been playing games less than 5 years"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption 
                    title="I am an experienced"
                    description="I've been playing games less than 10 years"
                    icon="🎓"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <SelectOption 
                    title="I am an expert"
                    description="I've been playing games less than 30 years"
                    icon="😎"
                    selected={state.level === 2}
                    onClick={() => setLevel(2)}
                />
                <SelectOption 
                    title="I'm an elder"
                    description="I've been playing games more than 30 years"
                    icon="🧙‍♂️"
                    selected={state.level === 3}
                    onClick={() => setLevel(3)}
                />

                <Link to='/' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
        
    )
}