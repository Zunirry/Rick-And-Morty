export default function reducer(state, action) {
    switch(action.type){
      case 'SET_PEOPLE_LIST':
        return {...state, peopleList: action.payload}

      case 'FILTER_BY_NAME':
       const search = state.peopleList.filter(people =>{
         return people.name.toLowerCase().includes(action.payload.toLowerCase())
        })
        return {...state,  searchFilter: search}

      case 'FILTER_BY_SPECIE':
        const {specieSelected} = action.payload
        if('' === specieSelected){
          return {...state, peopleFilterBySpecie: [], filterBySpecie: '' }
        }
        const peopleFilterBySpecie = state.peopleList.filter(specie => specie.species === specieSelected)
        return { ...state, peopleFilterBySpecie, filterBySpecie: specieSelected}
      case 'ERROR':
        return { ...state, error: action.payload };
      default:
        return state
    }
  }