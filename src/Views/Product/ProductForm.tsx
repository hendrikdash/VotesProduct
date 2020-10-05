import React, {FC} from "react";
import {Form, Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

type FormData = {
  productName: string;
  productDescription: string;
  productPrice: string;
};




interface InitProps {
  handleSubmitParent : (data : object) => void;
  defaultValues: object;
}
const ProductForm : FC<InitProps> = ({defaultValues, handleSubmitParent}) =>  {
    const { register, handleSubmit, errors, formState  } = useForm<FormData>({defaultValues});
    const onSubmit = handleSubmit(({ productName, productDescription, productPrice }) => {
      const dataSubmit = {
        name : productName,
        description : productDescription,
        price : productPrice
      }
      handleSubmitParent(dataSubmit)
    }); 
    
    // useEffect(() => {
    //     console.log(defaultValues,"edit");
    // }, [defaultValues]);

    return (
      <>
        <Form onSubmit={onSubmit}>
        
          <Form.Group controlId="formGroupName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="productName" placeholder="Product Name" 
              ref={register({
                required: true,
                minLength: {value: 10, message: "Min lenght 6 character"},
                maxLength: 30,
              })}
              // style={{ borderColor: errors.productName && "red" }}
              isInvalid={!!errors.productName}
             />
              <Form.Control.Feedback type="invalid">
                {errors?.productName?.message?  errors.productName.message : null}
              </Form.Control.Feedback>
             
          </Form.Group>
          <Form.Group controlId="formGroupTextArea">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" name="productDescription" placeholder="Product Description" 
            ref={register({
              required: true,
              minLength: {value: 10, message: "Min lenght 10 words"},
              maxLength: {value: 250, message: "Max lenght 1 paragraph"},
            })} 
            isInvalid={!!errors.productDescription}
            />
            <Form.Control.Feedback type="invalid">
              {errors?.productDescription?.message?  errors.productDescription.message : null}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="formGroupPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" name="productPrice" placeholder="Price in dollar" 
            ref={register({
              required: true,
              minLength: {value: 1, message: "Min lenght 1 Digits"},
              maxLength: {value: 5, message: "Max lenght 5 Digits"},
            })} 
            isInvalid={!!errors.productPrice}/>
            <Form.Control.Feedback type="invalid">
              {errors?.productPrice?.message?  errors.productPrice.message : null}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Button type="submit" disabled={formState.isSubmitting}>Submit</Button> 
        </Form>

        
      </>
    );
  }


export default ProductForm;
