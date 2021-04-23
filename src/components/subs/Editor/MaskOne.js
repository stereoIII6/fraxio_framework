import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
class MaskOne extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 className="m-0 p-0">Create a PYE Token !</h2>
                <Form>
                    <Input type="text" name="pye_name" placeholder="PYE Token Name" id="input_mask"/>
                    <Input type="text" name="pye_desc" placeholder="PYE Token Description" id="input_mask"/>
                    <InputGroup id="input_mask">
                        <Input type="select" name="pye_format_select" placeholder="Format Select">
                            <option name="default" value="900x9900" >default</option>
                        </Input>
                        <Input type="text" name="fheight" placeholder="900" />
                        <Input type="text" name="fwidth" placeholder="900"/>
                    </InputGroup>
                    <Input type="submit" value="START CREATING" id="input_mask"/>

                    
                </Form>
            </div>
         );
    }
}
 
export default MaskOne;