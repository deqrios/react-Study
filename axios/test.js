// axios HTTP 프로토콜 기반 REST API 사용을 더 편리하게 해주는 친구
// Javascript => REST API === fetch()
// axios === fetch의 사용을 쉽게 해주는 친구

axios({
    // REST
    url: "https://test/api/cafe/list/today",
    method: "get",
    data: {
        foo: "diary"
    }
});

// 이렇게 사용 안해

/*
axios.get() 
axios.post() 
axios.delete()
axios.put()
axios.patch()
axios.options()
*/

// GET
const getBreeds = async () => {
    try {
        return await axios.get("https://dog.ceo/api/breeds/list/all");
    } catch (error) {
        console.error(error);
    }
};

// Promise
const countBreeds = () => {
    const breeds = getBreeds()
        .then(response => {
            if (response.data.message) {
                console.log(`현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`);
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// POST
axios.post("https://test.com/", {
    params: {
        foo: "bar"
    }
});
