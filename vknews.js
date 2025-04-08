let vkfrom = []	

let newarr = []


function callbackFunc (result) {


    console.log(result)

    let dateAndTitle;

	let posts = result.response.items;
    

    let imagesrow = '';

	for(let i = 0; i<posts.length;i++){
		
        //posts[i].attachments[0].photo

        // posts[i].text

        dateAndTitle = posts[i].text.split('\n');

        // console.log(dateAndTitle)

		if(posts[i].attachments != ''){

            // console.log(posts[i].date)
            // data = new Date(posts[i].date)

            // console.log(data)

			newarr = [posts[i].attachments[0].photo.orig_photo.url, String(Date(posts[i].date)),'',posts[i].text]
			vkfrom.push(newarr)
		}

        
        // posts[i].copy_history[0].attachments[0]

       else if(posts[i].copy_history){

            if(posts[i].copy_history[0].attachments.length>1){
                for(let j =0; j<posts[i].copy_history[0].attachments.length; j++){
                    imagesrow += posts[i].copy_history[0].attachments[j].photo.orig_photo.url + '~'
                }
                imagesrow = imagesrow.substring(0,imagesrow.length-1)
                // console.log(imagesrow)

                
            }

            else{
                imagesrow = posts[i].copy_history[0].attachments[0].photo.orig_photo.url
            }

            // alert(imagesrow)
            
            // console.log(posts[i].copy_history[0].text.split('\n').join(' <br> '))
            // if(dateAndTitle[2] != undefined){

                

                // dateAndTitle[2] = "<br><br> " + dateAndTitle[2]


                posts[i].copy_history[0].from_id = String(posts[i].copy_history[0].from_id)

                

                let linktosourse = `<a href="https://vk.com/public${posts[i].copy_history[0].from_id.slice(1)}" target="blank"> ${dateAndTitle[2]} </a>`

                console.log(linktosourse)
                
            // }
            // else{
            //     dateAndTitle[2] = ' '
            // }

            newarr = [imagesrow, dateAndTitle[0],dateAndTitle[1],posts[i].copy_history[0].text.split('\n').join(' <br> ') + "<br><br>" + linktosourse]
			vkfrom.push(newarr)

            imagesrow = '';

        }

	}

    // console.log(vkfrom)

    vkfrom = JSON.stringify(vkfrom)

    // if(!localStorage.getItem('fromvk')){
    localStorage.setItem('fromvk',vkfrom)
    // }
    // else{

    // }

    // localStorage.clear()
    
   
	}

    // export default vkfrom;

    // export {callbackFunc};

    // module.exports.myFunction = callbackFunc;

// for(let i =0; i<vkfrom.length;i++){
	// 	news.unshift(vkfrom[i]);
    // }