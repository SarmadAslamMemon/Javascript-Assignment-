function describe_city(city,country)
{
   alert(city+" "+"is in"+" "+country)
}
describe_city
(
    city=prompt("In which city you are"),
    country="Pakistan"
)


// Another example of describe_city_ with default country


describe_city
(
    city=prompt("In which city you are"),
    country="Iran"
)

// Another example of describe_city  without default country


describe_city
(
    city=prompt("In which city you are?"),
    country=prompt("In which country You are living ")

)
