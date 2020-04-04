
import giphyReducer from './giphy'

const initialState = {
    fetching: false,
    gifs: [],
    query: "",
    error: null,
    likeGifs: []
}
const dumyGifs = [{ "type": "gif", "id": "7AakwAD18h34B5caSs", "slug": "kpop-bts-7AakwAD18h34B5caSs", "url": "https://giphy.com/gifs/kpop-bts-7AakwAD18h34B5caSs", "bitly_gif_url": "https://gph.is/2ptdk2R", "bitly_url": "https://gph.is/2ptdk2R", "embed_url": "https://giphy.com/embed/7AakwAD18h34B5caSs", "username": "", "source": "https://www.youtube.com/watch?v=U07HQS34Z1Q", "rating": "g", "content_url": "", "source_tld": "www.youtube.com", "source_post_url": "https://www.youtube.com/watch?v=U07HQS34Z1Q", "is_indexable": 0, "is_sticker": 0, "import_datetime": "2018-03-20 19:08:56", "trending_datetime": "2018-03-27 20:32:22", "images": { "fixed_height_still": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200_s.gif", "width": "361", "height": "200", "size": "29387" }, "original_still": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy_s.gif", "width": "480", "height": "266", "size": "45037" }, "fixed_width": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200w.gif", "width": "200", "height": "111", "size": "771157", "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200w.mp4", "mp4_size": "55102", "webp": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200w.webp", "webp_size": "125046" }, "fixed_height_small_still": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/100_s.gif", "width": "181", "height": "100", "size": "10359" }, "fixed_height_downsampled": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200_d.gif", "width": "361", "height": "200", "size": "188590", "webp": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200_d.webp", "webp_size": "21424" }, "preview": { "width": "480", "height": "266", "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy-preview.mp4", "mp4_size": "36856" }, "fixed_height_small": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/100.gif", "width": "181", "height": "100", "size": "654242", "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/100.mp4", "mp4_size": "53520", "webp": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/100.webp", "webp_size": "114184" }, "downsized_still": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy-downsized_s.gif", "width": "384", "height": "212", "size": "35449" }, "downsized": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy-downsized.gif", "width": "384", "height": "212", "size": "1905836" }, "downsized_large": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy.gif", "width": "480", "height": "266", "size": "3522046" }, "fixed_width_small_still": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/100w_s.gif", "width": "100", "height": "56", "size": "4510" }, "preview_webp": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy-preview.webp", "width": "428", "height": "237", "size": "47564" }, "fixed_width_still": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200w_s.gif", "width": "200", "height": "111", "size": "11979" }, "fixed_width_small": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/100w.gif", "width": "100", "height": "56", "size": "236215", "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/100w.mp4", "mp4_size": "26352", "webp": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/100w.webp", "webp_size": "60276" }, "downsized_small": { "width": "429", "height": "238", "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy-downsized-small.mp4", "mp4_size": "90070" }, "fixed_width_downsampled": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200w_d.gif", "width": "200", "height": "111", "size": "71190", "webp": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200w_d.webp", "webp_size": "10914" }, "downsized_medium": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy.gif", "width": "480", "height": "266", "size": "3522046" }, "original": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy.gif", "width": "480", "height": "266", "size": "3522046", "frames": "70", "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy.mp4", "mp4_size": "219582", "webp": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy.webp", "webp_size": "375362", "hash": "dd8a10ffc1525f24c5658ff3f95b4e27" }, "fixed_height": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200.gif", "width": "361", "height": "200", "size": "2113930", "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200.mp4", "mp4_size": "135633", "webp": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/200.webp", "webp_size": "247114" }, "looping": { "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy-loop.mp4", "mp4_size": "761066" }, "original_mp4": { "width": "480", "height": "266", "mp4": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy.mp4", "mp4_size": "219582" }, "preview_gif": { "url": "https://media1.giphy.com/media/7AakwAD18h34B5caSs/giphy-preview.gif", "width": "139", "height": "77", "size": "49373" }, "480w_still": { "url": "https://media4.giphy.com/media/7AakwAD18h34B5caSs/480w_s.jpg", "width": "480", "height": "266" } }, "title": "sad bangtan boys GIF", "index": 2, "isFavorite": true }, { "type": "gif", "id": "tHmbzW3y3sFxaCxXO3", "slug": "marchmadness-basketball-tHmbzW3y3sFxaCxXO3", "url": "https://giphy.com/gifs/marchmadness-basketball-tHmbzW3y3sFxaCxXO3", "bitly_gif_url": "https://gph.is/2pJqFnN", "bitly_url": "https://gph.is/2pJqFnN", "embed_url": "https://giphy.com/embed/tHmbzW3y3sFxaCxXO3", "username": "marchmadness", "source": "", "rating": "g", "content_url": "", "source_tld": "", "source_post_url": "", "is_indexable": 0, "is_sticker": 0, "import_datetime": "2018-03-27 17:36:44", "trending_datetime": "2018-03-27 18:45:01", "user": { "avatar_url": "https://media.giphy.com/avatars/marchmadness/WknJhLdXGhMo.png", "banner_url": "https://media.giphy.com/headers/marchmadness/rlYl33rUiJC7.gif", "profile_url": "https://giphy.com/marchmadness/", "username": "marchmadness", "display_name": "NCAA March Madness", "twitter": "@marchmadness", "is_verified": true }, "images": { "fixed_height_still": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200_s.gif", "width": "366", "height": "200", "size": "57028" }, "original_still": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy_s.gif", "width": "480", "height": "262", "size": "90106" }, "fixed_width": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200w.gif", "width": "200", "height": "110", "size": "870668", "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200w.mp4", "mp4_size": "124823", "webp": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200w.webp", "webp_size": "282106" }, "fixed_height_small_still": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/100_s.gif", "width": "183", "height": "100", "size": "17076" }, "fixed_height_downsampled": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200_d.gif", "width": "366", "height": "200", "size": "321286", "webp": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200_d.webp", "webp_size": "80602" }, "preview": { "width": "201", "height": "110", "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy-preview.mp4", "mp4_size": "40425" }, "fixed_height_small": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/100.gif", "width": "183", "height": "100", "size": "704041", "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/100.mp4", "mp4_size": "115560", "webp": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/100.webp", "webp_size": "242504" }, "downsized_still": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy-downsized_s.gif", "width": "334", "height": "182", "size": "46777" }, "downsized": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy-downsized.gif", "width": "334", "height": "182", "size": "1968893" }, "downsized_large": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy.gif", "width": "480", "height": "262", "size": "4051839" }, "fixed_width_small_still": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/100w_s.gif", "width": "100", "height": "55", "size": "6488" }, "preview_webp": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy-preview.webp", "width": "159", "height": "87", "size": "48574" }, "fixed_width_still": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200w_s.gif", "width": "200", "height": "110", "size": "20727" }, "fixed_width_small": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/100w.gif", "width": "100", "height": "55", "size": "248699", "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/100w.mp4", "mp4_size": "45160", "webp": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/100w.webp", "webp_size": "111756" }, "downsized_small": { "width": "315", "height": "172", "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy-downsized-small.mp4", "mp4_size": "132245" }, "fixed_width_downsampled": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200w_d.gif", "width": "200", "height": "110", "size": "112995", "webp": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200w_d.webp", "webp_size": "35494" }, "downsized_medium": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy.gif", "width": "480", "height": "262", "size": "4051839" }, "original": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy.gif", "width": "480", "height": "262", "size": "4051839", "frames": "49", "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy.mp4", "mp4_size": "452873", "webp": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy.webp", "webp_size": "884682", "hash": "9f81ef913fc480874e1f15581a214bd5" }, "fixed_height": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200.gif", "width": "366", "height": "200", "size": "2524518", "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200.mp4", "mp4_size": "289847", "webp": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/200.webp", "webp_size": "623176" }, "looping": { "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy-loop.mp4", "mp4_size": "1965683" }, "original_mp4": { "width": "480", "height": "262", "mp4": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy.mp4", "mp4_size": "452873" }, "preview_gif": { "url": "https://media3.giphy.com/media/tHmbzW3y3sFxaCxXO3/giphy-preview.gif", "width": "104", "height": "57", "size": "48701" }, "480w_still": { "url": "https://media4.giphy.com/media/tHmbzW3y3sFxaCxXO3/480w_s.jpg", "width": "480", "height": "262" } }, "title": "college basketball GIF by NCAA March Madness", "index": 10, "isFavorite": true }, { "type": "gif", "id": "otwPl04SYT7Yk", "slug": "realitytvgifs-american-idol-mariah-carey-otwPl04SYT7Yk", "url": "https://giphy.com/gifs/realitytvgifs-american-idol-mariah-carey-otwPl04SYT7Yk", "bitly_gif_url": "https://gph.is/1bpdiiK", "bitly_url": "https://gph.is/1bpdiiK", "embed_url": "https://giphy.com/embed/otwPl04SYT7Yk", "username": "realitytvgifs", "source": "https://realitytvgifs.tumblr.com/post/76440497165/mariah-discussing-tardiness-on-the-breakfast-club", "rating": "pg", "content_url": "", "source_tld": "realitytvgifs.tumblr.com", "source_post_url": "https://realitytvgifs.tumblr.com/post/76440497165/mariah-discussing-tardiness-on-the-breakfast-club", "is_indexable": 0, "is_sticker": 0, "import_datetime": "2014-02-12 18:08:42", "trending_datetime": "2018-03-27 17:30:01", "user": { "avatar_url": "https://media.giphy.com/avatars/realitytvgifs/sdANtS453YMz.png", "banner_url": "", "profile_url": "https://giphy.com/realitytvgifs/", "username": "realitytvgifs", "display_name": "RealityTVGIFs", "twitter": "@tkylemac", "is_verified": true }, "images": { "fixed_height_still": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/200_s.gif", "width": "280", "height": "200" }, "original_still": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy_s.gif", "width": "245", "height": "175" }, "fixed_width": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/200w.gif", "width": "200", "height": "143", "size": "677917", "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/200w.mp4", "mp4_size": "49759", "webp": "https://media3.giphy.com/media/otwPl04SYT7Yk/200w.webp", "webp_size": "289522" }, "fixed_height_small_still": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/100_s.gif", "width": "140", "height": "100" }, "fixed_height_downsampled": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/200_d.gif", "width": "280", "height": "200", "size": "225124", "webp": "https://media3.giphy.com/media/otwPl04SYT7Yk/200_d.webp", "webp_size": "79418" }, "preview": { "width": "244", "height": "174", "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy-preview.mp4", "mp4_size": "49850" }, "fixed_height_small": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/100.gif", "width": "140", "height": "100", "size": "357342", "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/100.mp4", "mp4_size": "34658", "webp": "https://media3.giphy.com/media/otwPl04SYT7Yk/100.webp", "webp_size": "175110" }, "downsized_still": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy_s.gif", "width": "245", "height": "175" }, "downsized": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy.gif", "width": "245", "height": "175", "size": "1004262" }, "downsized_large": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy.gif", "width": "245", "height": "175", "size": "1004262" }, "fixed_width_small_still": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/100w_s.gif", "width": "100", "height": "71" }, "preview_webp": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy-preview.webp", "width": "134", "height": "96", "size": "48846" }, "fixed_width_still": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/200w_s.gif", "width": "200", "height": "143" }, "fixed_width_small": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/100w.gif", "width": "100", "height": "71", "size": "195135", "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/100w.mp4", "mp4_size": "24646", "webp": "https://media3.giphy.com/media/otwPl04SYT7Yk/100w.webp", "webp_size": "109486" }, "downsized_small": { "width": "244", "height": "174", "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy-downsized-small.mp4", "mp4_size": "74123" }, "fixed_width_downsampled": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/200w_d.gif", "width": "200", "height": "143", "size": "124454", "webp": "https://media3.giphy.com/media/otwPl04SYT7Yk/200w_d.webp", "webp_size": "49738" }, "downsized_medium": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy.gif", "width": "245", "height": "175", "size": "1004262" }, "original": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy.gif", "width": "245", "height": "175", "size": "1004262", "frames": "35", "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy.mp4", "mp4_size": "202390", "webp": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy.webp", "webp_size": "423884" }, "fixed_height": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/200.gif", "width": "280", "height": "200", "size": "1225609", "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/200.mp4", "mp4_size": "73859", "webp": "https://media3.giphy.com/media/otwPl04SYT7Yk/200.webp", "webp_size": "461294" }, "looping": { "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy-loop.mp4", "mp4_size": "1177045" }, "original_mp4": { "width": "480", "height": "342", "mp4": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy.mp4", "mp4_size": "202390" }, "preview_gif": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/giphy-preview.gif", "width": "97", "height": "69", "size": "48745" }, "480w_still": { "url": "https://media3.giphy.com/media/otwPl04SYT7Yk/480w_s.jpg", "width": "480", "height": "343" } }, "title": "mariah carey idol GIF by RealityTVGIFs", "index": 18, "isFavorite": true }]

describe('giphy reducer', () => {
    it('GET_GIFS_COMPLETED', () => {
        const action = {
            type: "GET_GIFS_REQUESTED"
        }
        const response = giphyReducer(initialState, action)
        expect(response.fetching).toBe(true)

    })

    it('GET_GIFS_COMPLETED',()=>{
        const action = {
            type: "GET_GIFS_COMPLETED",
            gifs:dumyGifs
        }
        window.sessionStorage.setItem('likeGifs'[dumyGifs[1]])
        
        const response = giphyReducer(initialState, action)
        
        expect(response.gifs.length).toBe(3)
    })

    it('GET_GIFS_FAILED',()=>{
        const action = {
            type: "GET_GIFS_FAILED",
            error:'este es un error'
        }
        
        
        const response = giphyReducer(initialState, action)
        
        expect(response.error).toBe('este es un error')
    })

    it('SEARCH_GIF_REQUESTED',()=>{
        const action = {
            type: "SEARCH_GIF_REQUESTED",
           
        }
        
        
        const response = giphyReducer(initialState, action)
        
        expect(response.fetching).toBe(true)
    })

    it('LIKE_GIF',()=>{
        dumyGifs[0].index =0
        const g = dumyGifs[0]
        const action = {
            type: "LIKE_GIF",
            gif:g
           
        }
        window.sessionStorage.setItem('likeGifs',JSON.stringify(dumyGifs))
        
        const response = giphyReducer(initialState, action)
        
        expect(response.gifs[0].isFavorite).toBe(true)
    })

    it('UNLIKE_GIF',()=>{
        dumyGifs[0].index =0
        const g = dumyGifs[0]
        const action = {
            type: "UNLIKE_GIF",
            gif:g
           
        }
        const response = giphyReducer(initialState, action)
        expect(response.gifs[0].isFavorite).toBe(false)
    })

    it('GET_GIFS_LOCAL_REQUESTED',()=>{
      
        const action = {
            type: "GET_GIFS_LOCAL_REQUESTED",
            
           
        }
        const response = giphyReducer(initialState, action)
        expect(response.fetching).toBe(true)
    })
    it('SET_QUERY',()=>{
      
        const action = {
            type: "SET_QUERY",
            query:"el query"
           
        }
        const response = giphyReducer(initialState, action)
        expect(response.query).toBe("el query")
    })
    it('GET_ONE_GIF',()=>{
      
        const action = {
            type: "GET_ONE_GIF"
           
        }
        const response = giphyReducer(initialState, action)
        expect(response.fetching).toBe(true)
    })

    it('no type',()=>{
      
        const action = {
            type: "no_type"
           
        }
        const response = giphyReducer(initialState, action)
        expect(response.error).toBe(null)
        expect(response.query).toBe("")
        expect(response.fetching).toBe(false)
    })
    it('no type',()=>{
      
        const action = {
            type: "no_type"
           
        }
        const response = giphyReducer(initialState, action)
        expect(response.error).toBe(null)
        expect(response.query).toBe("")
        expect(response.fetching).toBe(false)
    })
})