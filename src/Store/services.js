const mock_quadrants = async() => {
    
    let response = await( () => {
        return (
            {
                quadrant_1: [[-33.827365, 151.269182], [-33.832502, 151.280542]],
                quadrant_2: [[-33.827365, 151.269182], [-33.832502, 151.280542]]
            }
        );
    });

    return response
}

// {} because typescript was moaning
export {mock_quadrants}
