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

                
            // }
            // else{
            //     dateAndTitle[2] = ' '
            // }
            
            // Date(1741271457)

            let data = new Date(posts[i].copy_history[0].date * 1000)

            data = data.toLocaleDateString('ru-RU',{
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
             
            data = data.replace(',', "").split(' '); data.shift(); data.pop()
            if (data[1] == 'мая'){data[1] = 'май'}
            data[1] = data[1]+',';
            data = data.join(' ');

            console.log(data);


            let linktosourse = `Источник: <a href="https://vk.com/public${posts[i].copy_history[0].from_id.slice(1)}" target="blank">https://vk.com/public${posts[i].copy_history[0].from_id.slice(1)}</a>`
            
            if(posts[i].text != ''){

                dateAndTitle = posts[i].text.split('\n');

                if(dateAndTitle.length == 1){
                    dateAndTitle = [data, dateAndTitle[0]]
                }

                else if (dateAndTitle.length > 1){
                    dateAndTitle = [dateAndTitle[0], dateAndTitle[1] ]
                }
            }

            else{
                dateAndTitle = [data,'']
            }




            // data = data.join('').trim()


            // console.log(data.toDateString(posts[i].copy_history[0].date))
            // console.log(data.toDateString(1744179024))
            // console.log(data.toDateString(1741869987))
            // console.log(Date(posts[i].copy_history[0].date))

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