<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Shop;
use App\User;

use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class ShopController extends Controller
{
    public function index() {
        $shop = Shop::all();

        return response()->json(compact('shop'));
    }

    public function createGood(Request $request) {
        $shop = new Shop;

        $shop->title = $request->get('title');
        $shop->description = $request->get('description');
        $shop->price = $request->get('price');

        if ($shop->save()) {
            return response()->json(['status' => 'Success']);    
        }
        return response()->json(['status' => 'Failure']);
    }

    public function deleteGood($id) {
        if (Shop::where('id', $id)->delete()) {
            return response()->json(['status' => 'Success']);
        }
        return response()->json(['status' => 'Failure']);
    }

    public function buyGood(Request $request) {
        $user_id = $request->get('user_id');
        $good_id = $request->get('good_id');

        $good = json_decode(Shop::where('id', $good_id)->get());
        $user = json_decode(User::where('id', $user_id)->get());

        if ($user[0]->flames > $good[0]->price) {
            
            $user[0]->flames = $user[0]->flames - $good[0]->price;

            User::where('id', $user_id)->update(['flames' => $user[0]->flames]);
            Shop::where('id', $good_id)->update(['user_id' => $user_id]);

            $user = User::where('id', $request->get('user_id'))->get();

            return response()->json(['status' => 'Success', 'user' => $user]);
        }
        return response()->json(['status' => 'Failure']);

    }

    public function getMoney() {

    }

    public function getMyGoods($id) {
        // dd($id);
        $goods = Shop::where('user_id', $id)->get();
        return response()->json(['goods' => $goods]);
    }

}
