/* eslint-disable react/prop-types */
export const Fundo = ({children}) => {
    return(
        <>
            <div className="bg-azul w-screen h-screen bg-[#2148C0] bg-cover">
                {children}
            </div>
        </>
    )
}