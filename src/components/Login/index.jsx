export const Login = () => {
    return (
        <>
            <div className="h-full w-full flex justify-center items-center">
                <div
                    id="container"
                    className="flex flex-col gap-10 w-[300px] h-[398px] "
                >
                    <div id="img" className="flex justify-center w-full">
                        <img
                            className="w-[119px] h-[97px]"
                            src="src/assets/images/carrinho.png"
                        />
                    </div>

                    <div id="inputs" className="flex flex-col gap-y-4">
                        <div
                            id="user"
                            className="flex flex-row gap-2 border-white border-2 rounded p-3 w-[300px] h-[45px]"
                        >
                            <span>
                                <img
                                    className="h-5 w-5"
                                    src="src/assets/images/user.png"
                                    alt=""
                                />
                            </span>
                            <input
                                type="text"
                                className="w-[250px] leading-10 bg-transparent border-none font-montserrat font-light placeholder-white outline-0 text-white"
                                placeholder="USERNAME"
                            />
                        </div>

                        <div
                            id="password"
                            className="flex flex-row gap-2 border-white border-2 rounded p-3 w-[300px] h-[45px]"
                        >
                            <span>
                                <img
                                    className="h-5 w-5"
                                    src="src/assets/images/lock.png"
                                    alt=""
                                />
                            </span>
                            <input
                                type="text"
                                className="w-[250px] leading-10 bg-transparent border-none font-montserrat font-light placeholder-white outline-0 text-white"
                                placeholder="PASSWORD"
                            />
                        </div>
                    </div>

                    <div id="botao" className="w-full h-[45px]">
                        <button className="w-full h-full bg-white border-none font-semibold font-montserrat text-[#2148C0] shadow-lg">
                            LOGIN
                        </button>
                        <div id="esqueceu" className="w-full text-right pr-1">
                            <a href="" className="text-white no-underline">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
