const INITIAL_STATE = {
    sections: [
        {
            title: "loft",
            imageUrl: "https://i.ibb.co/rs4VWSH/loft.jpg",
            id: 1,
            linkUrl: "shop/loft",
        },
        {
            title: "minimalist",
            imageUrl: "https://i.ibb.co/hBvDmy2/Minimalist.jpg",
            id: 2,
            linkUrl: "shop/minimalist",
        },
        {
            title: "craft-mortar",
            imageUrl: "https://i.ibb.co/R9c0N2q/craft-mortat.jpg",
            id: 3,
            size: "large",
            linkUrl: "shop/craft-mortar",
        },
        {
            title: "colored",
            imageUrl: "https://i.ibb.co/cNsb1yQ/Colorfull.jpg",
            size: "large",
            id: 4,
            linkUrl: "shop/colored",
        },
        // {
        //     title: "mens",
        //     imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        //     size: "large",
        //     id: 5,
        //     linkUrl: "shop/mens",
        // },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;

