import * as C from "./styles"
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme/'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from "react"

export const FormStep1 = () => {
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const history = useNavigate()
    const { state, dispatch } = useForm()
    
    const handleNextStep = () => {
        if (state.name !== '') {
            history('/step2')
        } else {
            alert('Answer the questions!')
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        }) 
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 1/3 </p>
                <h1>What is your name?</h1>
                
                <hr />

                <label>
                    Your name
                    <input 
                        type="text" 
                        autoFocus
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
        
    )
}