

export const FORM = {
    PRODUCTS:{
        title:"add product",
        initialValues:{
            name:"",
            desc:"",
            price:"",
            restaurant:""
        },
        inputs:[
            {   
                id:"001",
                label:"name",
                name:"name",
                type:"text"
            },
            {   
                id:"002",
                label:"description",
                name:"desc",
                type:"textarea"
            },
            {   
                id:"003",
                label:"price",
                name:"price",
                type:"number"
            },
            {   
                id:"004",
                label:"restaurants",
                name:"restaurants",
                type:"select"
            },
        ]
    },
    RESTAURANT:{
        title:"add restaurant",
        initialValues:{
            name:"",
            cuisine:"",
            delivery_price:"",
            delivery_minute:"",
            address:"",
            category:""
        },
        inputs:[
            {   
                id:"001",
                label:"name",
                name:"name",
                type:"text"
            },
            {   
                id:"002",
                label:"cuisine",
                name:"cuisine",
                type:"text"
            },
            {   
                id:"003",
                label:"delivery price",
                name:"delivery_price",
                type:"number"
            },
            {   
                id:"004",
                label:"delivery minute",
                name:"delivery_minute",
                type:"number"
            },
            {   
                id:"005",
                label:"category",
                name:"category",
                type:"select"
            },
        ]
    }
}