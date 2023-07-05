import Foundation

@objc public class RTSPSharescreen: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
