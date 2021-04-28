import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
class MaskOne extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="m-0 p-0">Create a PYE Token !</h1>
                <Form>
                    <hr></hr>
                   
                    <Input type="text" name="pye_name" placeholder="PYE Token Name" bssize="lg"/>
                    <label>PYE Token Name </label>
                    <Input type="text" name="pye_desc" placeholder="PYE Token Description" bssize="lg"/>
                    <label>PYE Token Description </label>
                    <InputGroup >
                        <Input type="select" name="pye_format_select" placeholder="Format Select" bssize="lg">
                            <option name="default" value="900x9900" >default</option>
                        </Input>
                        <Input type="text" name="fheight" placeholder="900px" bssize="lg" />
                        <Input type="text" name="fwidth" placeholder="900px" bssize="lg"/>
                    </InputGroup>
                    <label>PYE Token Format </label><br></br>
                    <Button value="" bssize="lg" className="btn btn-succes w-100" >START CREATING <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bricks" viewBox="0 0 16 16">
                        <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z" />
                    </svg></Button>

                    
                </Form>
            </div>
         );
    }
}
 
export default MaskOne;