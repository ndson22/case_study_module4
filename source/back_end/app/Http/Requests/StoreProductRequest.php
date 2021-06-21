<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'product_name' => 'required|max:100',
            'price' => 'required|number',
            'image' => 'required|image|file_extension:jpeg,png|mimes:jpeg,png|mimetypes:image/jpeg,image/png|max:2048',
            'description' => 'required|max:255',
            'gender' => 'required|max:20',
            'type_id' => 'required|number',
            'category_id' => 'required|number',
            'brand_id' => 'required|number'
        ];
    }
}
