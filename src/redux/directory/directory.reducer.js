const INITIAL_STATE = {
    sections: [
        {
            title: "loft",
            imageUrl: "https://i.ibb.co/7Nz39Rf/loft.jpg",
            id: 1,
            linkUrl: "shop/loft",
        },
        {
            title: "minimalist",
            imageUrl: "https://i.ibb.co/tBQSS2H/Minimalist.jpg",
            id: 2,
            linkUrl: "shop/minimalist",
        },
        {
            title: "craft-mortar",
            imageUrl: "https://i.ibb.co/rZtrtqW/craft-mortat.jpg",
            id: 3,
            size: "large",
            linkUrl: "shop/craft-mortar",
        },
        {
            title: "colored",
            imageUrl: "https://i.ibb.co/HtGP5h4/Colorfull.jpg",
            size: "large",
            id: 4,
            linkUrl: "shop/colored",
        },

    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;

