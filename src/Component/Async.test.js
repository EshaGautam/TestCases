import { render,screen} from "@testing-library/react";
import Async from "./Async";

describe('Async Component',()=>{

    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
        json:async()=>[{id:401,name:'mock',email:'mock444@gmail.com',body:'good luck mock'}]
    })

    test('renders data',async()=>{
        render(<Async/>)

        const listElement = await screen.findAllByRole('listitem')
        expect(listElement).not.toHaveLength(0)
    })
})