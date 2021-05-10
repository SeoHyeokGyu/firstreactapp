export const increase = () => ({
    type:"INCREMENT"
});

export const decrease = () => ({
    type:"DECREMENT"
})

const initstate = {
    number: 0,
}


const reducer = (state = initstate,action) => {
    switch (action.type){
        case "INCREAMENT":
            return {number:state.number +1};
        case "DECREMENT":
            return {number: state.number -1};
        default:
            return state;
    }
}

export default reducer()