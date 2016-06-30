//
//  TFHexStringToColor.m
//  HexStringToUIColor
//
//  Created by 左建军 on 16/6/30.
//  Copyright © 2016年 lanou. All rights reserved.
//

#import "TFHexStringToColor.h"

@implementation TFHexStringToColor


RCT_EXPORT_MODULE();

-(instancetype)init {
    self = [super init];
    if (self) {
        
    }
    return self;
}

RCT_EXPORT_METHOD(hexStringToColor:(NSDictionary *)color callback:(RCTResponseSenderBlock)callback) {
    
    NSLog(@"optipns = %@", color);
}


@end
