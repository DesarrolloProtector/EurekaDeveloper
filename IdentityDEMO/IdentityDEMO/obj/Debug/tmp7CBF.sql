ALTER TABLE [dbo].[AspNetUsers] ADD [ShippingAddress] [nvarchar](max)
INSERT [dbo].[__MigrationHistory]([MigrationId], [ContextKey], [Model], [ProductVersion])
VALUES (N'202202080902162_AddedShippingField', N'IdentityDEMO.Models.ApplicationDbContext',  0x1F8B0800000000000400DD5C596FE436127E0FB0FF41D05336705A3E328359A33D81D3B6778D8C0F4C7B06791BB025765B1889EA4894C7C622BF6C1FF293F217B62851072F1DDDEAC3C100839658FCAA58AC228BA5A2FFFADF9FE39F9FC3C07AC271E247E4CC3E1A1DDA16266EE4F9647166A774FEE33BFBE7F7FFF86E7CE985CFD6E782EE84D1414F929CD98F942E4F1D27711F71889251E8BB719444733A72A3D0415EE41C1F1EFECB393A723040D8806559E38F29A17E88B307789C44C4C54B9AA2E026F27090F0F7D032CD50AD5B14E264895C7C665F7B18FAD2978BCB9BBB514E6E5BE7818F4094290EE6B685088928A220E8E9A7044F691C91C574092F50F0F0B2C44037474182F9004E2BF2AE63393C666371AA8E05949B26340A7B021E9D70E53872F795546C97CA03F55D66AA62A3CE545869EF631480026486A7932066C467F64DC9E23C59DE623A2A3A8E72C8AB18E0BE45F1D7511DF1C0EADCEFA034A6E3D121FB77604DD280A6313E2338A5310A0EACFB7416F8EEAFF8E521FA8AC9D9C9D16C7EF2EECD5BE49DBCFD099FBCA98F14C60A74C20B78751F474B1C836C785E8EDFB61CB19F23772CBBD5FAE45A015B02BFB0AD1BF4FC0193057D048F397E675B57FE33F68A37DCB83E111FDC083AD13885C7DB3408D02CC065BBD3C893FDDFC0F5F8CDDB41B8DEA2277F914DBDC41F1C2706BFFA8883AC3579F497B97B09F3FD85935DC551C89E45FBCA5BBF4CA33476D9602223C9038A17988AD28D9DCA783B9934831ADEAC0BD4FD376D26A96ADE5A5236A0553CA160B16D6F28E4DD2CDFCE1677BE5CC2E465A6C534D264709ADD6A24753FB0EA4495F11C75351E0283FA3BAF8553587C96C0EBDCF3629C240D02C0CF4E0234F3BB0C911F0CB0F876E00281CFDC8F435C6AF597084C1D91DE3ABA4749026B8FF71F943C6E5C4153ECA631D8EB94A270B9716EF78F11C1B76938639EB63D5E834DCDC3B7E80AB9348A2F09EBB536DE87C8FD1AA5F492781788E24FD42D00D9E3831F760718449C73D705A7BC0263C6DE2482B8BE00BC26F4E4B8371C5B11771DFC4C02E487FAE8475ABBBF14A45504A4A750A22003992E126A12F543B4F04937510B52B3A83945ABA89CACAFA80CAC9BA49CD22C6846D02A674E35586C99CDD0F0C16506BBFFD1E57AC182692DA8A9710A2B24FE3726388665CCBB4794E2985433D065DDD84570924D1F63BAF1BD29E3F41905E9D0AC56F2866C1118DE1B32D8FDF7864C4C78FDE47B2C2AE970E42A8801BE13BDFE34D7EE739264DB76076198DB66BE9D35C0E42EE74912B97EE6059A641B4F9588F2430C67B5E74DF2D1C8B917181818BACFB63C780363B365A3BA231738C0145BE76E9E8C9CA0C4459EAA461890D743B06247D50856E56044E17E507882A5E3987542EC109480A7FA84AA6EE113D75FA2A0554B52CF8E5B181B7BC9436EB9C04B4C18C3564D7461AE4FB930014A3ED2A4B46968ECD42CAED9100D51AB69CEDB42D86ADE954CC8566CB2257636D8258FDF366298CD1ADB827136ABA48B00C6F4E12E0C949F55BA1A807C70D93703954E4C0603E521D5560C54D4D80E0C5454C9AB33D0FC88DA75FEA5F3EABE99A77850DEFEB6DEA8AE1DD8A6A08F3D33CD3CF6843E147AE05835CF8B196BC4CF5473380339F9F92CE1A1AE6C220C7C8AA998B2A9E25D6D1CEA3483C846D40458195A0B28FFF0A800290ED543B82297D7281D8F227AC01679B74658BEF64BB0351B50B1EB1F606B84E6CFB4B271763A7D94232BAD4131F24E87851A8EC620E4C54B1C7807A598F2B2AA62BAC4C27DA2E1DAC0F8643428A825723528A918CCE05A2A4CB35D4BBA80AC4F48B69696A4F0C9A0A56230836B89DB68BB923441418FB0602D15895BF840CE56643ACADDA66C1B3B7961167F31760C155CE31B947DBAAD5574F137D6342FE79AFC38ED5FE614E6188E9B68AA9D4A694B4E348AD1024BADC01A24BDF2E3845E208A6688E579265EA89069F756C3F25FB0AC6F9FEA2416FB4041CD7E8B6B7BBD5C40D86CD56884835CC1104316D26479748D01E8BB5BACC40E0528D6A4EE27519086C41C61997BE71FF0EAFDF3372AC2D891E4572228455D4A9C2BEABED3CCA85E31D42C9511CCEA33658630E9BB883FEB1A37C5A466942245554731A5AD763673A650A6DF6CC96162FFC96A45D88C6729B5307528A5B13B2EAF79A9A3F1573D316A65130A58ADAD3BAA58D952C7145B7AE8502C5F11342836F590B25EA42208596F5809CFA0513D45770E6A594A1D5D6DED8EAC2950A9436B9A57C0D6C82CB77547D5D4B0D48135CDDDB1AB82167975DEE33DD178285A7D53CC0FCEEBED8A068CCD2CB5C36CAAB5FA803A50ED754F2C5E01A080F1F77B694EC6D3E3EAE694274CD63327038679ED113EAD8B4B4F633D801953F85E2E2CEF4DF50266BC7E46BB51D3504E8F3249C9BD3C454AA7C5313FB9B55F0A528E7239896D156A84ADFD25A1381C3182D1F4F76012F8982DE405C10D22FE1C2734AF11B18F0F8F8EA56B45FB73C5C749122FD09C7C4DF77CC439DB42B9177942B1FB8862B5F8628D6B3015A892D7BE261E7E3EB3FF9BF53ACD5224EC57F6FAC0BA4E3E11FFF7141A1EE2145B7FA8C5A4C35C0BE87011A514F48F5771C3A3BBCAAF7FFB92773DB0EE6270A753EB5052F42AD32FDEFBE8254DDE750D6956BE0DF27ABDCD70D1A2C0FF3E44CFFFAC83F6BE4CA19554F2C0D5EF4ECC7C3AC8BD89B5C6ABBD1BB116A2E6FEC3507883A8D074BF61152CE3DD060F1E6976B7A1DF60F5771D5611CD78CFC127FDC1E45B0EDD97B6A2E70EF736CD296C1BCB5CA6E7D62AF1B54A4677BDDF29C5E46B39BA5A30DE036ED0A2F0F5C29E57566C3DD876ACA9A51E0C7B9776BFF102EA7DA999AE0E02BB2D95DE667574C3F7AFBF5551F41E94F169CA92765FFABC6D5B33A595F7BC7EB45F81F39E191BDFE6775FC6BC6D6333259DF7DCD87A152BEF99ADED6AFFDCB1A575DE42775E7AAC5651193E0FE932D36DA5C5791A1F8EFFB3088C208F28F31BA1FA5A3613B3CA588C0C2B12335373119DCC58711C85AF42D1CCB6DF58F986DF38584ED3CCD6507ADAC49BAFFF8DBC394D336F4341E72E8AA2B52595BA42F59675ACA9DAEB3515410B2369A9B96F8B591BBFF5BFA69AE7419422788FE18BF5EB29711E442543BA4E8F9266F5E333EC9DB5BF5B09FB77E22F2A08F6572C0976855DB3A4B926F3A8D8BC25890A122943738329F2604B3D8FA93F472E85669680CEAEB467493DF6196486BD6B7297D2654A61C8389C0542C28B05014DFCB3BA6D51E6F1DD923D25430C01C4F459E2FE8EFC92FA8157CA7DA5C90919205874C1D3BD6C2E294BFB2E5E4AA4DB887404E2EA2B83A2071C2E03004BEEC8143DE1556403F3FB8017C87DA932802690F68910D53EBEF0D1224661C231AAFEF00836EC85CFEFFF0F7F6294B6BE550000 , N'6.2.0-61023')

