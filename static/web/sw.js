if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};i[a]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1b51a4a5"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1008.65d0bc27255efb44.js",revision:"65d0bc27255efb44"},{url:"/_next/static/chunks/1010.398d7f6d64350bec.js",revision:"398d7f6d64350bec"},{url:"/_next/static/chunks/1024-c1d97a020e4f8ed2.js",revision:"c1d97a020e4f8ed2"},{url:"/_next/static/chunks/1051-8a5ca8b5f9f98bb1.js",revision:"8a5ca8b5f9f98bb1"},{url:"/_next/static/chunks/1053.8687cfd8a17fc072.js",revision:"8687cfd8a17fc072"},{url:"/_next/static/chunks/1084.6bea57384cba1ae4.js",revision:"6bea57384cba1ae4"},{url:"/_next/static/chunks/1130-a387d68446355fa4.js",revision:"a387d68446355fa4"},{url:"/_next/static/chunks/1264.bc1ae582c7103a90.js",revision:"bc1ae582c7103a90"},{url:"/_next/static/chunks/1390.37323d0bd940a2bb.js",revision:"37323d0bd940a2bb"},{url:"/_next/static/chunks/1446.d5d70ea36429f194.js",revision:"d5d70ea36429f194"},{url:"/_next/static/chunks/1529.bc79084598ec485d.js",revision:"bc79084598ec485d"},{url:"/_next/static/chunks/1538.11cadf1eaacbcefc.js",revision:"11cadf1eaacbcefc"},{url:"/_next/static/chunks/1639.f30fe9c1d7a9b7c2.js",revision:"f30fe9c1d7a9b7c2"},{url:"/_next/static/chunks/1650.84f5dabaecde8ab1.js",revision:"84f5dabaecde8ab1"},{url:"/_next/static/chunks/1660.991f158ecb3352e6.js",revision:"991f158ecb3352e6"},{url:"/_next/static/chunks/1664-87578879448381e7.js",revision:"87578879448381e7"},{url:"/_next/static/chunks/1668.7492683feab74ead.js",revision:"7492683feab74ead"},{url:"/_next/static/chunks/1700-dce7a9059374b420.js",revision:"dce7a9059374b420"},{url:"/_next/static/chunks/1706.a3e9374c37c19795.js",revision:"a3e9374c37c19795"},{url:"/_next/static/chunks/1749-797abf8460ff31f5.js",revision:"797abf8460ff31f5"},{url:"/_next/static/chunks/177.35d11cd14fe99093.js",revision:"35d11cd14fe99093"},{url:"/_next/static/chunks/1770.38d25755cefe252a.js",revision:"38d25755cefe252a"},{url:"/_next/static/chunks/1869.ba2b5785504648d0.js",revision:"ba2b5785504648d0"},{url:"/_next/static/chunks/1873.cf0d6495f7f707ba.js",revision:"cf0d6495f7f707ba"},{url:"/_next/static/chunks/1920.7d9cf23dc8b5d25e.js",revision:"7d9cf23dc8b5d25e"},{url:"/_next/static/chunks/1965.d545fc99490e3ba4.js",revision:"d545fc99490e3ba4"},{url:"/_next/static/chunks/2019-5803cd4bceffb3d9.js",revision:"5803cd4bceffb3d9"},{url:"/_next/static/chunks/2040.2b48b43e5c9bbd94.js",revision:"2b48b43e5c9bbd94"},{url:"/_next/static/chunks/2119.d36b0cda066f5464.js",revision:"d36b0cda066f5464"},{url:"/_next/static/chunks/2122-616c9b060e9a17fe.js",revision:"616c9b060e9a17fe"},{url:"/_next/static/chunks/2130-877795ab1b81dcae.js",revision:"877795ab1b81dcae"},{url:"/_next/static/chunks/2136.12ac294f3891b38f.js",revision:"12ac294f3891b38f"},{url:"/_next/static/chunks/2200.861650b77f324aca.js",revision:"861650b77f324aca"},{url:"/_next/static/chunks/228.fdb700250e4f569c.js",revision:"fdb700250e4f569c"},{url:"/_next/static/chunks/2314.1153c06022d5de89.js",revision:"1153c06022d5de89"},{url:"/_next/static/chunks/2348.7504535d09011349.js",revision:"7504535d09011349"},{url:"/_next/static/chunks/2386.6af1d744592e754a.js",revision:"6af1d744592e754a"},{url:"/_next/static/chunks/2406.96739077d3c84715.js",revision:"96739077d3c84715"},{url:"/_next/static/chunks/2424.c9005e09ebd7fbc5.js",revision:"c9005e09ebd7fbc5"},{url:"/_next/static/chunks/2474-0fb59d6b3117ab83.js",revision:"0fb59d6b3117ab83"},{url:"/_next/static/chunks/2542.82fcb9f7206aadce.js",revision:"82fcb9f7206aadce"},{url:"/_next/static/chunks/2554.a3c207d2af79fd1a.js",revision:"a3c207d2af79fd1a"},{url:"/_next/static/chunks/2602.0ab9c0012442b52b.js",revision:"0ab9c0012442b52b"},{url:"/_next/static/chunks/2675.3af9b237ab623dbf.js",revision:"3af9b237ab623dbf"},{url:"/_next/static/chunks/2711.7672fb0c1aa1afa9.js",revision:"7672fb0c1aa1afa9"},{url:"/_next/static/chunks/2877.4a5ca5df09892683.js",revision:"4a5ca5df09892683"},{url:"/_next/static/chunks/2891-2558c60aab79fabe.js",revision:"2558c60aab79fabe"},{url:"/_next/static/chunks/2938.e167526feae6ef3a.js",revision:"e167526feae6ef3a"},{url:"/_next/static/chunks/305.12d40e54e45183a1.js",revision:"12d40e54e45183a1"},{url:"/_next/static/chunks/3068-03c5c6410150c24e.js",revision:"03c5c6410150c24e"},{url:"/_next/static/chunks/310.e5e934fd72536f57.js",revision:"e5e934fd72536f57"},{url:"/_next/static/chunks/3203.dc914969aee2bc0d.js",revision:"dc914969aee2bc0d"},{url:"/_next/static/chunks/3236.8dc370538063c466.js",revision:"8dc370538063c466"},{url:"/_next/static/chunks/3283.5631a0b072194c3b.js",revision:"5631a0b072194c3b"},{url:"/_next/static/chunks/3314.0f3a0420056fafc0.js",revision:"0f3a0420056fafc0"},{url:"/_next/static/chunks/3366.c9bf067f4d51c69f.js",revision:"c9bf067f4d51c69f"},{url:"/_next/static/chunks/3371.5a95cd9dea8f50f1.js",revision:"5a95cd9dea8f50f1"},{url:"/_next/static/chunks/3436.08955cc9e1ac44d5.js",revision:"08955cc9e1ac44d5"},{url:"/_next/static/chunks/3465.73743d0ddae087d7.js",revision:"73743d0ddae087d7"},{url:"/_next/static/chunks/3482.49f7c729ccf12ac5.js",revision:"49f7c729ccf12ac5"},{url:"/_next/static/chunks/3509.69746e47618d0f71.js",revision:"69746e47618d0f71"},{url:"/_next/static/chunks/3519.b024433a944bd592.js",revision:"b024433a944bd592"},{url:"/_next/static/chunks/3594.5cc5c7a0bbd47992.js",revision:"5cc5c7a0bbd47992"},{url:"/_next/static/chunks/3595-6ecb023807c38df1.js",revision:"6ecb023807c38df1"},{url:"/_next/static/chunks/3600.ec3c85bf935e12c4.js",revision:"ec3c85bf935e12c4"},{url:"/_next/static/chunks/3669.b1db3a6b3cd99f2e.js",revision:"b1db3a6b3cd99f2e"},{url:"/_next/static/chunks/370.f96b2206e2101722.js",revision:"f96b2206e2101722"},{url:"/_next/static/chunks/3747.ad3de818d2ae593e.js",revision:"ad3de818d2ae593e"},{url:"/_next/static/chunks/3883.fd10732a41130097.js",revision:"fd10732a41130097"},{url:"/_next/static/chunks/3942-48366093b3b60cf4.js",revision:"48366093b3b60cf4"},{url:"/_next/static/chunks/3993.b259a3b69e681f9d.js",revision:"b259a3b69e681f9d"},{url:"/_next/static/chunks/402.61522d7324de5ef7.js",revision:"61522d7324de5ef7"},{url:"/_next/static/chunks/4060-34a83a0cf0d9ebea.js",revision:"34a83a0cf0d9ebea"},{url:"/_next/static/chunks/4103.6651d09067d14b04.js",revision:"6651d09067d14b04"},{url:"/_next/static/chunks/4104-586602c027ce22f8.js",revision:"586602c027ce22f8"},{url:"/_next/static/chunks/4143.3496aac8b2328864.js",revision:"3496aac8b2328864"},{url:"/_next/static/chunks/4144.3c019e4251676851.js",revision:"3c019e4251676851"},{url:"/_next/static/chunks/4163.52feec717e3eacee.js",revision:"52feec717e3eacee"},{url:"/_next/static/chunks/4212.5f493c5b189225ba.js",revision:"5f493c5b189225ba"},{url:"/_next/static/chunks/4281-8d6901fb475aebae.js",revision:"8d6901fb475aebae"},{url:"/_next/static/chunks/4293.5d96c5ca35f21d26.js",revision:"5d96c5ca35f21d26"},{url:"/_next/static/chunks/4323.dd43ee850f8029e2.js",revision:"dd43ee850f8029e2"},{url:"/_next/static/chunks/437.d2949bfdb13f5bd8.js",revision:"d2949bfdb13f5bd8"},{url:"/_next/static/chunks/4439.2bb83d4c0f781f6b.js",revision:"2bb83d4c0f781f6b"},{url:"/_next/static/chunks/4504.a6dda04f0c5907ec.js",revision:"a6dda04f0c5907ec"},{url:"/_next/static/chunks/4511.dc0368e4e61dfe89.js",revision:"dc0368e4e61dfe89"},{url:"/_next/static/chunks/4612.bcb6aadc35feecaf.js",revision:"bcb6aadc35feecaf"},{url:"/_next/static/chunks/4680-b1fbead3ac6081fd.js",revision:"b1fbead3ac6081fd"},{url:"/_next/static/chunks/4749-e09a7722eb2edf7f.js",revision:"e09a7722eb2edf7f"},{url:"/_next/static/chunks/4796.29e3723ec42dfe34.js",revision:"29e3723ec42dfe34"},{url:"/_next/static/chunks/4812.6bd272e77804ca78.js",revision:"6bd272e77804ca78"},{url:"/_next/static/chunks/4829.96039ce2c8d53696.js",revision:"96039ce2c8d53696"},{url:"/_next/static/chunks/4879.dd61e51355332dcb.js",revision:"dd61e51355332dcb"},{url:"/_next/static/chunks/4927.1b236d206ec27da3.js",revision:"1b236d206ec27da3"},{url:"/_next/static/chunks/4938-7c5f68df37885201.js",revision:"7c5f68df37885201"},{url:"/_next/static/chunks/4ad82c5e-c823a06c208c0a68.js",revision:"c823a06c208c0a68"},{url:"/_next/static/chunks/500.7a1fb94a9afc99e1.js",revision:"7a1fb94a9afc99e1"},{url:"/_next/static/chunks/5056-d229a49abadc86bd.js",revision:"d229a49abadc86bd"},{url:"/_next/static/chunks/5134.3996724b737c5a1e.js",revision:"3996724b737c5a1e"},{url:"/_next/static/chunks/520.dc96249db8eef735.js",revision:"dc96249db8eef735"},{url:"/_next/static/chunks/5213-3b777297efe32f2d.js",revision:"3b777297efe32f2d"},{url:"/_next/static/chunks/5258.4238f3d147945912.js",revision:"4238f3d147945912"},{url:"/_next/static/chunks/5283-6f7b07a8e8569a2b.js",revision:"6f7b07a8e8569a2b"},{url:"/_next/static/chunks/5308.47738d0e0db5b699.js",revision:"47738d0e0db5b699"},{url:"/_next/static/chunks/531.ca843ea31564aa22.js",revision:"ca843ea31564aa22"},{url:"/_next/static/chunks/5372.492f4cd628b3ac00.js",revision:"492f4cd628b3ac00"},{url:"/_next/static/chunks/5412.14ea19f553f43a57.js",revision:"14ea19f553f43a57"},{url:"/_next/static/chunks/5485.f113dbbc741e3a39.js",revision:"f113dbbc741e3a39"},{url:"/_next/static/chunks/5560-fb30897479c6d750.js",revision:"fb30897479c6d750"},{url:"/_next/static/chunks/5578-d6de74db6520302a.js",revision:"d6de74db6520302a"},{url:"/_next/static/chunks/5584.ca3caa0338bc275e.js",revision:"ca3caa0338bc275e"},{url:"/_next/static/chunks/5596-c57e0f6790463985.js",revision:"c57e0f6790463985"},{url:"/_next/static/chunks/5648.3f82a818d8c87f42.js",revision:"3f82a818d8c87f42"},{url:"/_next/static/chunks/5672.dcce75062c8d26a2.js",revision:"dcce75062c8d26a2"},{url:"/_next/static/chunks/5753.f0edeb0d8f9b0fee.js",revision:"f0edeb0d8f9b0fee"},{url:"/_next/static/chunks/5815.efe84a7eca12dae3.js",revision:"efe84a7eca12dae3"},{url:"/_next/static/chunks/5819.e90865001c57f72d.js",revision:"e90865001c57f72d"},{url:"/_next/static/chunks/583-26b1e49e1cef0623.js",revision:"26b1e49e1cef0623"},{url:"/_next/static/chunks/5849.9f23ac5f98896080.js",revision:"9f23ac5f98896080"},{url:"/_next/static/chunks/5879.4bb27c33bae257b0.js",revision:"4bb27c33bae257b0"},{url:"/_next/static/chunks/5888-3725c82b4e08ddd1.js",revision:"3725c82b4e08ddd1"},{url:"/_next/static/chunks/5891-f2b8c2ff83489659.js",revision:"f2b8c2ff83489659"},{url:"/_next/static/chunks/5903.b5b6d5de95428f17.js",revision:"b5b6d5de95428f17"},{url:"/_next/static/chunks/5938-812de177aac0596e.js",revision:"812de177aac0596e"},{url:"/_next/static/chunks/6017-4077566221f4f92e.js",revision:"4077566221f4f92e"},{url:"/_next/static/chunks/6062.bb8f0e3bd7462035.js",revision:"bb8f0e3bd7462035"},{url:"/_next/static/chunks/6092.528dc547249ef589.js",revision:"528dc547249ef589"},{url:"/_next/static/chunks/6108-458c185100f66a9b.js",revision:"458c185100f66a9b"},{url:"/_next/static/chunks/6121.83e10deb964140ba.js",revision:"83e10deb964140ba"},{url:"/_next/static/chunks/6133.91bd1bed4161f5ca.js",revision:"91bd1bed4161f5ca"},{url:"/_next/static/chunks/6139.103d551acf4d30fb.js",revision:"103d551acf4d30fb"},{url:"/_next/static/chunks/617.31f729d399c43ea0.js",revision:"31f729d399c43ea0"},{url:"/_next/static/chunks/62.d55ef7280361ee83.js",revision:"d55ef7280361ee83"},{url:"/_next/static/chunks/6275.efa3bb30fd23921c.js",revision:"efa3bb30fd23921c"},{url:"/_next/static/chunks/6300-ca6bc9c2dc41661b.js",revision:"ca6bc9c2dc41661b"},{url:"/_next/static/chunks/6395.851f6d84ba515ecd.js",revision:"851f6d84ba515ecd"},{url:"/_next/static/chunks/6403.c0997a80e08cb503.js",revision:"c0997a80e08cb503"},{url:"/_next/static/chunks/6443.a1c9257ad6c47d80.js",revision:"a1c9257ad6c47d80"},{url:"/_next/static/chunks/6460.0fb8592f427c3ca0.js",revision:"0fb8592f427c3ca0"},{url:"/_next/static/chunks/6471.dce5ccefe1dc3a2b.js",revision:"dce5ccefe1dc3a2b"},{url:"/_next/static/chunks/6627-6a1c9fee3f22b50a.js",revision:"6a1c9fee3f22b50a"},{url:"/_next/static/chunks/6665.a0a9e9760f544f71.js",revision:"a0a9e9760f544f71"},{url:"/_next/static/chunks/6692.d6c883ce790d0860.js",revision:"d6c883ce790d0860"},{url:"/_next/static/chunks/6697-852bf5b11eb4e8a6.js",revision:"852bf5b11eb4e8a6"},{url:"/_next/static/chunks/673.a54bdea3fc07f826.js",revision:"a54bdea3fc07f826"},{url:"/_next/static/chunks/6732.70d9d8641ef8986c.js",revision:"70d9d8641ef8986c"},{url:"/_next/static/chunks/6773.51d47b33ad5a9bcf.js",revision:"51d47b33ad5a9bcf"},{url:"/_next/static/chunks/6802.3e6c331d30aec981.js",revision:"3e6c331d30aec981"},{url:"/_next/static/chunks/6820.e6bc24e2b2889c32.js",revision:"e6bc24e2b2889c32"},{url:"/_next/static/chunks/686-ac60207e0485593c.js",revision:"ac60207e0485593c"},{url:"/_next/static/chunks/6910.e492972d96755244.js",revision:"e492972d96755244"},{url:"/_next/static/chunks/6991.07459778c6738da9.js",revision:"07459778c6738da9"},{url:"/_next/static/chunks/7001.2d9e1f6796482397.js",revision:"2d9e1f6796482397"},{url:"/_next/static/chunks/7061.d91337d9fc213665.js",revision:"d91337d9fc213665"},{url:"/_next/static/chunks/7090.bf1a61e0b1f7c872.js",revision:"bf1a61e0b1f7c872"},{url:"/_next/static/chunks/710.dfca12e4a2455e61.js",revision:"dfca12e4a2455e61"},{url:"/_next/static/chunks/7118.b3d87ff3530a6017.js",revision:"b3d87ff3530a6017"},{url:"/_next/static/chunks/7138.70dab546bb59f862.js",revision:"70dab546bb59f862"},{url:"/_next/static/chunks/7213.a0c056179cbf676e.js",revision:"a0c056179cbf676e"},{url:"/_next/static/chunks/7230.32ac2396d502f20d.js",revision:"32ac2396d502f20d"},{url:"/_next/static/chunks/7268.d484ff054e54009b.js",revision:"d484ff054e54009b"},{url:"/_next/static/chunks/7282.22b245ed63f9d2ac.js",revision:"22b245ed63f9d2ac"},{url:"/_next/static/chunks/7315.8d306ee5d2828075.js",revision:"8d306ee5d2828075"},{url:"/_next/static/chunks/7365.7ceda850ac28062b.js",revision:"7ceda850ac28062b"},{url:"/_next/static/chunks/7370.61df557e33da3891.js",revision:"61df557e33da3891"},{url:"/_next/static/chunks/7421.1175838a8eba8952.js",revision:"1175838a8eba8952"},{url:"/_next/static/chunks/7423-09d0caf0464c43f7.js",revision:"09d0caf0464c43f7"},{url:"/_next/static/chunks/7434.d778f2b05592f28b.js",revision:"d778f2b05592f28b"},{url:"/_next/static/chunks/7475.0017763814cf5003.js",revision:"0017763814cf5003"},{url:"/_next/static/chunks/7525.c6eed6a4a5cd946a.js",revision:"c6eed6a4a5cd946a"},{url:"/_next/static/chunks/758.0b6d1b449cc0ee21.js",revision:"0b6d1b449cc0ee21"},{url:"/_next/static/chunks/7590.627ab0e79be82e87.js",revision:"627ab0e79be82e87"},{url:"/_next/static/chunks/75fc9c18.9d3d46f4e0e91870.js",revision:"9d3d46f4e0e91870"},{url:"/_next/static/chunks/7601.1bdb63794564ce90.js",revision:"1bdb63794564ce90"},{url:"/_next/static/chunks/7663.34be9652adacaa51.js",revision:"34be9652adacaa51"},{url:"/_next/static/chunks/7719.e5d3e81be3275274.js",revision:"e5d3e81be3275274"},{url:"/_next/static/chunks/7741.e22ef84c70ae89ad.js",revision:"e22ef84c70ae89ad"},{url:"/_next/static/chunks/775.558461fe0a42c3a7.js",revision:"558461fe0a42c3a7"},{url:"/_next/static/chunks/7752-75428f02423c669f.js",revision:"75428f02423c669f"},{url:"/_next/static/chunks/7762.ae5d986760ab2146.js",revision:"ae5d986760ab2146"},{url:"/_next/static/chunks/7917.e5b530f24e0cfde9.js",revision:"e5b530f24e0cfde9"},{url:"/_next/static/chunks/7949.8166ff00de2d428e.js",revision:"8166ff00de2d428e"},{url:"/_next/static/chunks/7988.85f989e573521cac.js",revision:"85f989e573521cac"},{url:"/_next/static/chunks/8007.2fa9bfacffe9851f.js",revision:"2fa9bfacffe9851f"},{url:"/_next/static/chunks/8029.d86f52f4f9e84955.js",revision:"d86f52f4f9e84955"},{url:"/_next/static/chunks/8091-b60ef10c64cecc6d.js",revision:"b60ef10c64cecc6d"},{url:"/_next/static/chunks/8142.c97327241e69f3f0.js",revision:"c97327241e69f3f0"},{url:"/_next/static/chunks/8171.da41f4d3690366fc.js",revision:"da41f4d3690366fc"},{url:"/_next/static/chunks/8187-7d97c7eb895d7141.js",revision:"7d97c7eb895d7141"},{url:"/_next/static/chunks/8215-2c70ec180381f278.js",revision:"2c70ec180381f278"},{url:"/_next/static/chunks/8244.1c1c8c94ee6e6612.js",revision:"1c1c8c94ee6e6612"},{url:"/_next/static/chunks/8283.ee7d8119fc6e7c45.js",revision:"ee7d8119fc6e7c45"},{url:"/_next/static/chunks/8393.4cd47b5c292b3306.js",revision:"4cd47b5c292b3306"},{url:"/_next/static/chunks/8465-8fa0e08d5a9b953d.js",revision:"8fa0e08d5a9b953d"},{url:"/_next/static/chunks/8469-45255ca99c58c379.js",revision:"45255ca99c58c379"},{url:"/_next/static/chunks/8531-75eee38d06e50ddf.js",revision:"75eee38d06e50ddf"},{url:"/_next/static/chunks/856.4c36d06253e4c065.js",revision:"4c36d06253e4c065"},{url:"/_next/static/chunks/8561.9c882eb5399c8e2e.js",revision:"9c882eb5399c8e2e"},{url:"/_next/static/chunks/863.d1f823f3b2cdc300.js",revision:"d1f823f3b2cdc300"},{url:"/_next/static/chunks/8695.4bb47330d2392222.js",revision:"4bb47330d2392222"},{url:"/_next/static/chunks/870.2b08a3301938c260.js",revision:"2b08a3301938c260"},{url:"/_next/static/chunks/8707.6d2479a97eaecba4.js",revision:"6d2479a97eaecba4"},{url:"/_next/static/chunks/8713.d8667ce4bffce6d0.js",revision:"d8667ce4bffce6d0"},{url:"/_next/static/chunks/8770.8fd9ac029139aefb.js",revision:"8fd9ac029139aefb"},{url:"/_next/static/chunks/8813.2728fbf23c12eb8c.js",revision:"2728fbf23c12eb8c"},{url:"/_next/static/chunks/8864.228e581512aba07f.js",revision:"228e581512aba07f"},{url:"/_next/static/chunks/889.32cd8739e504901e.js",revision:"32cd8739e504901e"},{url:"/_next/static/chunks/8910.560394c43d61b203.js",revision:"560394c43d61b203"},{url:"/_next/static/chunks/8915.1123927305df7896.js",revision:"1123927305df7896"},{url:"/_next/static/chunks/8966-2232fb44d049be60.js",revision:"2232fb44d049be60"},{url:"/_next/static/chunks/9069.9ef40f783a33e4a2.js",revision:"9ef40f783a33e4a2"},{url:"/_next/static/chunks/9071.8c9b70f05e2417d6.js",revision:"8c9b70f05e2417d6"},{url:"/_next/static/chunks/9073.2c0caeef735f0bf3.js",revision:"2c0caeef735f0bf3"},{url:"/_next/static/chunks/9095.8d54854fc9fd85df.js",revision:"8d54854fc9fd85df"},{url:"/_next/static/chunks/9121.a5d60a09f12feb8a.js",revision:"a5d60a09f12feb8a"},{url:"/_next/static/chunks/9155.39d5bca1fe9bf187.js",revision:"39d5bca1fe9bf187"},{url:"/_next/static/chunks/9208.088c253c13b983ea.js",revision:"088c253c13b983ea"},{url:"/_next/static/chunks/9219.bedb75cd0ae0a042.js",revision:"bedb75cd0ae0a042"},{url:"/_next/static/chunks/9232.0d9a4d05da3768b6.js",revision:"0d9a4d05da3768b6"},{url:"/_next/static/chunks/9296.e5a6b004c10aa2ce.js",revision:"e5a6b004c10aa2ce"},{url:"/_next/static/chunks/9403-d2fe7733db580beb.js",revision:"d2fe7733db580beb"},{url:"/_next/static/chunks/9558.ea8eb1b73140a186.js",revision:"ea8eb1b73140a186"},{url:"/_next/static/chunks/9607.654e0dc773396d73.js",revision:"654e0dc773396d73"},{url:"/_next/static/chunks/971-93bd05bd3795eb04.js",revision:"93bd05bd3795eb04"},{url:"/_next/static/chunks/9713.7ed851ee53d8612d.js",revision:"7ed851ee53d8612d"},{url:"/_next/static/chunks/9781.a1215f91e333f3c5.js",revision:"a1215f91e333f3c5"},{url:"/_next/static/chunks/9790.363bbbb1053ebac5.js",revision:"363bbbb1053ebac5"},{url:"/_next/static/chunks/9798.35019e1f27a83aba.js",revision:"35019e1f27a83aba"},{url:"/_next/static/chunks/9831.289079487b8a0bc8.js",revision:"289079487b8a0bc8"},{url:"/_next/static/chunks/9876.db46004ae6cf9102.js",revision:"db46004ae6cf9102"},{url:"/_next/static/chunks/9972.7850d5926d4ad9ac.js",revision:"7850d5926d4ad9ac"},{url:"/_next/static/chunks/cff3e69d-06cd4c67f2c69874.js",revision:"06cd4c67f2c69874"},{url:"/_next/static/chunks/d6e1aeb5-146f3f0d7ca8a5da.js",revision:"146f3f0d7ca8a5da"},{url:"/_next/static/chunks/ee8b1517-bf3321000983cbe2.js",revision:"bf3321000983cbe2"},{url:"/_next/static/chunks/framework-030511d01d8c6be9.js",revision:"030511d01d8c6be9"},{url:"/_next/static/chunks/main-b01a3448808008ba.js",revision:"b01a3448808008ba"},{url:"/_next/static/chunks/pages/_app-92dbfb1102599e54.js",revision:"92dbfb1102599e54"},{url:"/_next/static/chunks/pages/_error-e4216aab802f5810.js",revision:"e4216aab802f5810"},{url:"/_next/static/chunks/pages/embed/chat/readonly-a80d48c47915a84b.js",revision:"a80d48c47915a84b"},{url:"/_next/static/chunks/pages/embed/chat/readwrite-a3467928d3f96b8b.js",revision:"a3467928d3f96b8b"},{url:"/_next/static/chunks/pages/embed/video-408b2c71a24bf46f.js",revision:"408b2c71a24bf46f"},{url:"/_next/static/chunks/pages/index-838931cb561b7571.js",revision:"838931cb561b7571"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-15ada3522eb71b9b.js",revision:"15ada3522eb71b9b"},{url:"/_next/static/css/0e2be447772fbc9c.css",revision:"0e2be447772fbc9c"},{url:"/_next/static/css/226396fd7a605c95.css",revision:"226396fd7a605c95"},{url:"/_next/static/css/22f76f542c0c1295.css",revision:"22f76f542c0c1295"},{url:"/_next/static/css/25dc33a258f29aa7.css",revision:"25dc33a258f29aa7"},{url:"/_next/static/css/36c06a6d1e31f589.css",revision:"36c06a6d1e31f589"},{url:"/_next/static/css/4b852c938abbe548.css",revision:"4b852c938abbe548"},{url:"/_next/static/css/566b61f69f4ccbf7.css",revision:"566b61f69f4ccbf7"},{url:"/_next/static/css/79a332200ba0e826.css",revision:"79a332200ba0e826"},{url:"/_next/static/css/7e0fea9a6c3abdcb.css",revision:"7e0fea9a6c3abdcb"},{url:"/_next/static/css/8841579222b5034b.css",revision:"8841579222b5034b"},{url:"/_next/static/css/91dee75f0f5d528b.css",revision:"91dee75f0f5d528b"},{url:"/_next/static/css/9ca4489da31a01c6.css",revision:"9ca4489da31a01c6"},{url:"/_next/static/css/a92aaa9cb5a9add1.css",revision:"a92aaa9cb5a9add1"},{url:"/_next/static/css/c1478bc9943d52ed.css",revision:"c1478bc9943d52ed"},{url:"/_next/static/css/c14fe3388348ec80.css",revision:"c14fe3388348ec80"},{url:"/_next/static/css/d14f51de0d46d6eb.css",revision:"d14f51de0d46d6eb"},{url:"/_next/static/css/d29c5cd9368918c4.css",revision:"d29c5cd9368918c4"},{url:"/_next/static/css/ef3f4486f04adedc.css",revision:"ef3f4486f04adedc"},{url:"/_next/static/lsZsR7gkPvxHoUT8Zdptb/_buildManifest.js",revision:"254e4e0c0618fb041fbb2f72243f9d95"},{url:"/_next/static/lsZsR7gkPvxHoUT8Zdptb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/airplay.c25573d0.svg",revision:"c25573d0"},{url:"/_next/static/media/inter-cyrillic-300-normal.3b0fe0aa.woff",revision:"3b0fe0aa"},{url:"/_next/static/media/inter-cyrillic-300-normal.786612d8.woff2",revision:"786612d8"},{url:"/_next/static/media/inter-cyrillic-400-normal.5156ecf9.woff2",revision:"5156ecf9"},{url:"/_next/static/media/inter-cyrillic-400-normal.a1abbbeb.woff",revision:"a1abbbeb"},{url:"/_next/static/media/inter-cyrillic-600-normal.20e88899.woff",revision:"20e88899"},{url:"/_next/static/media/inter-cyrillic-600-normal.ac257677.woff2",revision:"ac257677"},{url:"/_next/static/media/inter-cyrillic-800-normal.2ab892f6.woff",revision:"2ab892f6"},{url:"/_next/static/media/inter-cyrillic-800-normal.e12b115f.woff2",revision:"e12b115f"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.69e88d04.woff",revision:"69e88d04"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.f894e1d8.woff2",revision:"f894e1d8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.4879ddc8.woff2",revision:"4879ddc8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.a4fe2f88.woff",revision:"a4fe2f88"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.21482aa8.woff2",revision:"21482aa8"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.684dbb71.woff",revision:"684dbb71"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.635988ed.woff",revision:"635988ed"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.c396a18b.woff2",revision:"c396a18b"},{url:"/_next/static/media/inter-greek-300-normal.8e40d33d.woff2",revision:"8e40d33d"},{url:"/_next/static/media/inter-greek-300-normal.d8faf285.woff",revision:"d8faf285"},{url:"/_next/static/media/inter-greek-400-normal.0c589a4f.woff2",revision:"0c589a4f"},{url:"/_next/static/media/inter-greek-400-normal.fe3df9bb.woff",revision:"fe3df9bb"},{url:"/_next/static/media/inter-greek-600-normal.7a9219c1.woff2",revision:"7a9219c1"},{url:"/_next/static/media/inter-greek-600-normal.a3d58a50.woff",revision:"a3d58a50"},{url:"/_next/static/media/inter-greek-800-normal.3ae4b10a.woff",revision:"3ae4b10a"},{url:"/_next/static/media/inter-greek-800-normal.aa3c4563.woff2",revision:"aa3c4563"},{url:"/_next/static/media/inter-greek-ext-300-normal.25ff86b8.woff",revision:"25ff86b8"},{url:"/_next/static/media/inter-greek-ext-300-normal.2768fbb6.woff2",revision:"2768fbb6"},{url:"/_next/static/media/inter-greek-ext-400-normal.8225c735.woff2",revision:"8225c735"},{url:"/_next/static/media/inter-greek-ext-400-normal.e1f02a99.woff",revision:"e1f02a99"},{url:"/_next/static/media/inter-greek-ext-600-normal.2c1e268c.woff",revision:"2c1e268c"},{url:"/_next/static/media/inter-greek-ext-600-normal.533d789c.woff2",revision:"533d789c"},{url:"/_next/static/media/inter-greek-ext-800-normal.aaf8c68e.woff",revision:"aaf8c68e"},{url:"/_next/static/media/inter-greek-ext-800-normal.c1dbd103.woff2",revision:"c1dbd103"},{url:"/_next/static/media/inter-latin-300-normal.1e64cb66.woff2",revision:"1e64cb66"},{url:"/_next/static/media/inter-latin-300-normal.80c26b3a.woff",revision:"80c26b3a"},{url:"/_next/static/media/inter-latin-400-normal.779487c6.woff",revision:"779487c6"},{url:"/_next/static/media/inter-latin-400-normal.ac374088.woff2",revision:"ac374088"},{url:"/_next/static/media/inter-latin-600-normal.34227eb1.woff2",revision:"34227eb1"},{url:"/_next/static/media/inter-latin-600-normal.edaa5f1b.woff",revision:"edaa5f1b"},{url:"/_next/static/media/inter-latin-800-normal.7da978cc.woff",revision:"7da978cc"},{url:"/_next/static/media/inter-latin-800-normal.f15de3ac.woff2",revision:"f15de3ac"},{url:"/_next/static/media/inter-latin-ext-300-normal.5212580c.woff",revision:"5212580c"},{url:"/_next/static/media/inter-latin-ext-300-normal.dcb1958c.woff2",revision:"dcb1958c"},{url:"/_next/static/media/inter-latin-ext-400-normal.0cc0c669.woff2",revision:"0cc0c669"},{url:"/_next/static/media/inter-latin-ext-400-normal.c500b98e.woff",revision:"c500b98e"},{url:"/_next/static/media/inter-latin-ext-600-normal.03b16c21.woff2",revision:"03b16c21"},{url:"/_next/static/media/inter-latin-ext-600-normal.5f656274.woff",revision:"5f656274"},{url:"/_next/static/media/inter-latin-ext-800-normal.04eca372.woff2",revision:"04eca372"},{url:"/_next/static/media/inter-latin-ext-800-normal.2dc591bf.woff",revision:"2dc591bf"},{url:"/_next/static/media/inter-vietnamese-300-normal.09dd64fe.woff2",revision:"09dd64fe"},{url:"/_next/static/media/inter-vietnamese-300-normal.edc506b7.woff",revision:"edc506b7"},{url:"/_next/static/media/inter-vietnamese-400-normal.51fad319.woff2",revision:"51fad319"},{url:"/_next/static/media/inter-vietnamese-400-normal.feb85dd6.woff",revision:"feb85dd6"},{url:"/_next/static/media/inter-vietnamese-600-normal.672f1e0b.woff",revision:"672f1e0b"},{url:"/_next/static/media/inter-vietnamese-600-normal.e7c6af30.woff2",revision:"e7c6af30"},{url:"/_next/static/media/inter-vietnamese-800-normal.850d1593.woff",revision:"850d1593"},{url:"/_next/static/media/inter-vietnamese-800-normal.e9acfdc6.woff2",revision:"e9acfdc6"},{url:"/_next/static/media/poppins-devanagari-400-normal.87c72f23.woff2",revision:"87c72f23"},{url:"/_next/static/media/poppins-devanagari-400-normal.f2c29400.woff",revision:"f2c29400"},{url:"/_next/static/media/poppins-devanagari-600-normal.3828f203.woff2",revision:"3828f203"},{url:"/_next/static/media/poppins-devanagari-600-normal.6def6ad7.woff",revision:"6def6ad7"},{url:"/_next/static/media/poppins-latin-400-normal.74033fb9.woff",revision:"74033fb9"},{url:"/_next/static/media/poppins-latin-400-normal.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-latin-600-normal.94625d71.woff",revision:"94625d71"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-ext-400-normal.591327bf.woff2",revision:"591327bf"},{url:"/_next/static/media/poppins-latin-ext-400-normal.687cae43.woff",revision:"687cae43"},{url:"/_next/static/media/poppins-latin-ext-600-normal.10939fee.woff2",revision:"10939fee"},{url:"/_next/static/media/poppins-latin-ext-600-normal.22fff013.woff",revision:"22fff013"},{url:"/favicon.ico",revision:"2f3f8d056ba7cca2dafbdeb51b2d793c"},{url:"/fediverse-white.png",revision:"203a177d28810e5d9e35dd3478bd5d17"},{url:"/fonts/inter/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"/fonts/inter/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"/fonts/inter/Inter-BlackItalic.woff",revision:"e3329b2b90e1f9bcafd4a36604215dc1"},{url:"/fonts/inter/Inter-BlackItalic.woff2",revision:"a3cc36c89047d530522fc999a22cce54"},{url:"/fonts/inter/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/inter/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/inter/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/inter/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/inter/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"/fonts/inter/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff",revision:"728a4c7df3ed1b2bc077010063f9ef1c"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff2",revision:"fcc7d60ef790b43eb520fdc5c7348799"},{url:"/fonts/inter/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"/fonts/inter/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff",revision:"a6566ae6fa3c58b48f888d7c9c234d52"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff2",revision:"079cd1e71cd4f73bef86f72deced6d03"},{url:"/fonts/inter/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/inter/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/inter/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"/fonts/inter/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"/fonts/inter/Inter-LightItalic.woff",revision:"d0fa7cbcf9ca5edb6ebe41fd8d49e1fb"},{url:"/fonts/inter/Inter-LightItalic.woff2",revision:"df29c53403b2e13dc56df3e291c32f09"},{url:"/fonts/inter/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/inter/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/inter/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/inter/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/inter/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/inter/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/fonts/inter/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"/fonts/inter/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff",revision:"6cd13dbd150ac0c7f337a2939a3d50a8"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff2",revision:"3031b683bafcd9ded070c00d784f4626"},{url:"/fonts/inter/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"/fonts/inter/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"/fonts/inter/Inter-ThinItalic.woff",revision:"97bec98832c92f799aeebf670b83ff6c"},{url:"/fonts/inter/Inter-ThinItalic.woff2",revision:"a9780071b7f498c1523602910a5ef242"},{url:"/fonts/inter/Inter-italic.var.woff2",revision:"1f7ca6383ea7c74a7f5ddd76c3d3cef2"},{url:"/fonts/inter/Inter-roman.var.woff2",revision:"66c6e40883646a7ad993108b2ce2da32"},{url:"/fonts/inter/Inter.var.woff2",revision:"8dd26c3dd0125fb16ce19b8f5e8273fb"},{url:"/fonts/inter/inter.css",revision:"178297900cc42c19e1e47fbc2487abe5"},{url:"/img/favicon/android-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/android-icon-192x192.png",revision:"dd8a4c74ec2be516a57d40df25540ab8"},{url:"/img/favicon/android-icon-36x36.png",revision:"77887a8a93baed7eaeb316be4b31a7f9"},{url:"/img/favicon/android-icon-48x48.png",revision:"d1ff9fb0528cb9100ad5ee5fd7ece71f"},{url:"/img/favicon/android-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/android-icon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/apple-icon-114x114.png",revision:"efd8a26a33f16975715ce8c56169d730"},{url:"/img/favicon/apple-icon-120x120.png",revision:"56dcc09f7674f293595117b3181dcf88"},{url:"/img/favicon/apple-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/apple-icon-152x152.png",revision:"368ae8346bc9bb8d3f89ef48acb094f9"},{url:"/img/favicon/apple-icon-180x180.png",revision:"c691e02bc0b7df6cb31da017b420cba5"},{url:"/img/favicon/apple-icon-57x57.png",revision:"90555efc26d3a34a3979c133868f9d34"},{url:"/img/favicon/apple-icon-60x60.png",revision:"06dda52763aee5612d79999966488f79"},{url:"/img/favicon/apple-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/apple-icon-76x76.png",revision:"fedee38a4cf4d5918f8dbd1657c709c9"},{url:"/img/favicon/apple-icon-precomposed.png",revision:"8ad8bbee4eb631f76e89807878622aed"},{url:"/img/favicon/apple-icon.png",revision:"fb7eaf4e8ef1e852bd28b08f46ae6309"},{url:"/img/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/img/favicon/favicon-16x16.png",revision:"3dba5d08ad8a2a4de265448afa2fd03c"},{url:"/img/favicon/favicon-32x32.png",revision:"0ae932cc803789d645a2409cb67db049"},{url:"/img/favicon/favicon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/ms-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/ms-icon-150x150.png",revision:"6224c535c86d618e36a97da48e52056b"},{url:"/img/favicon/ms-icon-310x310.png",revision:"c391dc97d4c01177bd07291c1f694063"},{url:"/img/favicon/ms-icon-70x70.png",revision:"4cb3f77034cab3de7b60cd7d954042d1"},{url:"/img/fediverse-black.png",revision:"b5ede08246f4a691dff8dcefe39c984d"},{url:"/img/fediverse-color.png",revision:"6264c2ac70632db6e3447581da838d1b"},{url:"/img/follow.svg",revision:"8f185615cd7242792c8bd73b359b2498"},{url:"/img/indieauth.png",revision:"7fbf89da18a721dc25a16393b8a62e82"},{url:"/img/like.svg",revision:"2af8fcf2ffc5a028b9b300538a5e766e"},{url:"/img/repost.svg",revision:"12830cd3f1099b40670e8a69b40efa27"},{url:"/manifest.json",revision:"3ebf89ccef77c69bcd65ed8757086c99"},{url:"/serviceWorker.js",revision:"0fefbecf45aefe5354045cbf926e6a25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/\.(?:ts|m3u8)$/i,new e.NetworkOnly,"GET"),e.registerRoute(/^\/admin\/.*$/,new e.NetworkOnly,"GET"),e.registerRoute(/^\/api\/.*$/,new e.NetworkOnly,"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
