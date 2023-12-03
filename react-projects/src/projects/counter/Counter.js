import React, { useState } from "react";
import { CounterWrapper } from './counterStyled';

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count <= 0) {
            setCount(0);
        } else {
            setCount(prevState => prevState - 1);
        }
    };

    const increment = () => {
        setCount(prevState => prevState + 1);
    };

    return (
        <>
            <section className="section">
                <CounterWrapper>
                    <h2>React Counter</h2>
                    <div className="counter">
                        <button 
                        type="button"
                        className="counter_btn"
                        disabled={count=== 0}
                        onClick={decrement}
                        >
                            &#8722;
                        </button>

                        <h1 className="counter_count">{count}</h1>

                        <button
                        type="button"
                        className="counter_btn"
                        onClick={increment}
                        >
                            &#43;
                        </button>
                    </div>
                    <button
                    type="button"
                    className="reset_btn"
                    disabled= {count === 0}
                    onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                </CounterWrapper>

            </section>
        </>
    );
};

export default Counter;