const INITIAL_STATE = {categories: [
    {
      title: "fashion",
      icon:"checkroom",
      id: 1,
    },
    {
      title: "electronics",
      icon:"devices_other",
      id: 2,
    },
    {
      title: "appliances",
      icon:"blender",
      id: 3,
    },
    {
      title: "home",
      icon:"chair",
      id: 4,
    },
    {
      title: "toys",
      icon:"toys",
      id: 5,
    }
  ]};

const directoryReducer = ( currentState = INITIAL_STATE, action) =>{
    switch(action.type){
        default: 
            return currentState;
    }
}

export default directoryReducer;
