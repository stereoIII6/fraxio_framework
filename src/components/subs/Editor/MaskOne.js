import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
class MaskOne extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 className="m-0 p-0">Create a PYE Token !</h2>
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
                        <Input type="text" name="fheight" placeholder="900" bssize="lg" />
                        <Input type="text" name="fwidth" placeholder="900" bssize="lg"/>
                    </InputGroup>
                    <label>PYE Token Format </label><br></br>
                    <Button value="" bssize="lg" className="btn btn-succes w-100" >START CREATING</Button>

                    
                </Form>
            </div>
         );
    }
}
 
export default MaskOne;