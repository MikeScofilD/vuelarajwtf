<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $storeRequest)
    {
        $data = $storeRequest->validated();
        $data['password'] = Hash::make($data['password']);
        // return $data;
        User::firstOrCreate([
            'email' => $data['email']
        ], $data);
        return response([]);
    }
}
