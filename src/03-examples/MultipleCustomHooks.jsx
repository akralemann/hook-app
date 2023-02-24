import { useCounter, useFetch } from "../hooks"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";



export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter();

    const { data, isLoading, hasErros } =  useFetch(`https://dummyjson.com/quotes/${ counter }` )

    // const { quote, author } = !!data && data[0]

   

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading 
                ? <LoadingQuote /> 
                : <Quote quote={ data.quote } author={ data.author } /> 
        }


        <button 
            className="btn btn-primary" 
            onClick={ () => increment(1) }
            disabled={ isLoading }
        >
            Next quote
        </button>



    </>
  )
}
