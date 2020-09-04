export default function reducer(state, action) {
    console.log(action)
    switch(action.type){
      case 'SET_PEOPLE_LIST':
        return {...state, peopleList: action.payload}

      case 'FILTER_BY_NAME':
       const search = state.peopleList.filter(people =>{
         return people.name.toLowerCase().includes(action.payload.toLowerCase())
        })
        console.log(search)
        return {...state,  searchFilter: search}

      case 'FILTER_BY_SPECIE':
        const {specieSelected} = action.payload
        if('' === specieSelected){
          return {...state, peopleFilterBySpecie: [], filterBySpecie: '' }
        }
        const peopleFilterBySpecie = state.peopleList.filter(specie => specie.species === specieSelected)
        return { ...state, peopleFilterBySpecie, filterBySpecie: specieSelected}


      case 'OPEN_MODAL':
          return {...state}
      case 'CLOSE_MODAL':
        return {...state}
      default:
        return state
    }
  }