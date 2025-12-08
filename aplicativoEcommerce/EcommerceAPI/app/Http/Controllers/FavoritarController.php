<?php

namespace App\Http\Controllers;

use App\Models\Favorito;
use Illuminate\Http\Request;

class FavoritarController extends Controller
{
    public function toggleFavorito($produtoId)
    {
        $user = auth()->user();

        if ($user->favoritos()->where('produto_id', $produtoId)->exists()) {
            $user->favoritos()->detach($produtoId);

            return response()->json(['message' => ' Removido com sucesso!'], 200);
        }
        $user->favoritos()->attach($produtoId);

        return response()->json(['message' => 'Adicionado aos favoritos'], 200);
    }

    public function getFavoritos()
    {
        return auth()->user()->favoritos()->get();
    }
}
